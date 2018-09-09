import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './frame/frame.component';
import { HomeComponent } from './home/home.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from '../pages/pages.module';
import { PageOneComponent } from '../pages/page-one/page-one.component';
import { PageTwoComponent } from '../pages/page-two/page-two.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';

const routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'page1',
    component: PageOneComponent
  },
  {
    path: 'page2',
    component: PageTwoComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    PagesModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [FrameComponent, HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
