import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations:
  [
    PageOneComponent,
    PageTwoComponent,
    WelcomeComponent
  ],
  exports:
  [
    PageOneComponent,
    PageTwoComponent,
    WelcomeComponent
  ]
})
export class PagesModule { }
