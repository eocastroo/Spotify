import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MediaplayerComponent } from './components/mediaplayer/mediaplayer.component';
import { HeaderuserComponent } from './components/headeruser/headeruser.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';



@NgModule({
  declarations: [
    SidebarComponent,
    MediaplayerComponent,
    HeaderuserComponent,
    SectionGenericComponent,
    CardPlayerComponent,

  ],
  imports: [
    CommonModule,


  ], 
  exports: [
    SidebarComponent,
    CommonModule,
    MediaplayerComponent,
    HeaderuserComponent,
    SectionGenericComponent,
    CardPlayerComponent,


  ]
})
export class SharedModule { }
