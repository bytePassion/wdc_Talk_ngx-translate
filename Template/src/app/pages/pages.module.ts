import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RoundingPipe } from './pipes/rounding.pipe';
import {PageOneService} from './page-one/page-one.service';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  providers: [
    PageOneService
  ],
  declarations:
  [
    PageOneComponent,
    PageTwoComponent,
    WelcomeComponent,
    RoundingPipe
  ],
  exports:
  [
    PageOneComponent,
    PageTwoComponent,
    WelcomeComponent
  ]
})
export class PagesModule { }
