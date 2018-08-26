import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './frame.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FrameComponent, ContentComponent],
  exports: [FrameComponent]
})
export class HomeModule { }
