import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { MockBackend } from './mock-backend.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      HomeModule,
      HttpClientModule
   ],
   providers: [
       { provide: HTTP_INTERCEPTORS, useClass: MockBackend, multi: true },
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
