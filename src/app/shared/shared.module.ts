import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MediaplayerComponent } from './components/mediaplayer/mediaplayer.component';
import { HeaderuserComponent } from './components/headeruser/headeruser.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarComponent,
    MediaplayerComponent,
    HeaderuserComponent


  ], 
  exports: [
    CommonModule,
    SidebarComponent,
    MediaplayerComponent,
    HeaderuserComponent

  ]
})
export class SharedModule { }
