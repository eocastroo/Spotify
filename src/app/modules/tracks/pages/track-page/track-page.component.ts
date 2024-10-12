import { Component } from '@angular/core';
import { SharedModule } from "../../../../shared/shared.module";

@Component({
  selector: 'app-track-page',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './track-page.component.html',
  styleUrl: './track-page.component.css'
})
export class TrackPageComponent {
  mockTrackList = [
    {
      name :'BEBE(OFICIAL)'
    },
    {
      name :'BEBE(OFICIAL)'
    },
    {
      name :'BEBE(OFICIAL)'
    }
  ]

}
