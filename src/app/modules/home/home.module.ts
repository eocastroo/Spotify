import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './page/homepage/homepage.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomepageComponent
  ]
})
export class HomeModule { }
