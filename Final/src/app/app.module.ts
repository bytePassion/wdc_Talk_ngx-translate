import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { MockBackend } from './mock-backend.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

export function httpLoaderFactory(httpClient: HttpClient): TranslateLoader {
  return new MyTranslateHttpLoader(httpClient);
}

export class MyTranslateHttpLoader implements TranslateLoader {

  constructor(private readonly httpClient: HttpClient) { }

  getTranslation(lang: string): Observable<any> {
    return this.httpClient.get('http://localhost.de/api/translation/' + lang);
  }
}

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      HomeModule,
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
           provide: TranslateLoader,
           useFactory: httpLoaderFactory,
           deps: [HttpClient]
        }
     })
   ],
   providers: [
       { provide: HTTP_INTERCEPTORS, useClass: MockBackend, multi: true },
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
