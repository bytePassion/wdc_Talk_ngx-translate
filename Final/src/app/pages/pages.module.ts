import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { RoundingToCurrencyPipe } from './pipes/rounding-to-currency.pipe';
import { PageService } from './service/page.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations:
  [
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    RoundingToCurrencyPipe
  ],
  exports:
  [
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent
  ]
})
export class PagesModule { }
