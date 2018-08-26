import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './frame/frame.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [FrameComponent, ContentComponent, HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
