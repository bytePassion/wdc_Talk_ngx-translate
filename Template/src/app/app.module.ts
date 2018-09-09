import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { MockBackend } from './mock-backend.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { PagesModule } from './pages/pages.module';



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
