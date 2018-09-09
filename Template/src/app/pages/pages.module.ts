import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RoundingPipePipe } from './pipes/rounding-pipe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations:
  [
    PageOneComponent,
    PageTwoComponent,
    WelcomeComponent,
    RoundingPipePipe
  ],
  exports:
  [
    PageOneComponent,
    PageTwoComponent,
    WelcomeComponent
  ]
})
export class PagesModule { }
