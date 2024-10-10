import { Component } from '@angular/core';

@Component({
  selector: 'app-mediaplayer',
  standalone: false,
  templateUrl: './mediaplayer.component.html',
  styleUrl: './mediaplayer.component.css'
})
export class MediaplayerComponent {
monkover: any = {
  cover:  "'https://news.lamusica.com/wp-content/uploads/sites/6/2020/12/bad-bunny_ultimo-tour-del-mundo-1.jpg'",
  album: 'HEROES',
  name: 'Los camioneros'
}
}
