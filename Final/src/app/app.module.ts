import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { MockBackend } from './mock-backend.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function httpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(httpClient, './assets/translations/', '.json');
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
