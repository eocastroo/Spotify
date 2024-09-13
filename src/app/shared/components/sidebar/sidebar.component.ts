import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/app-routing.module';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
// Realizamos el menu de Arrays a llamar 
  mainMenu :{ defaultOptions: Array<any>, accessLink: Array<any> 
  } = {defaultOptions: [], accessLink: []} 
// Otra nmanera de llamar el array como ejemplo
  customOptions: Array <any> = []

  constructor(){ }

  ngOnInit(): void {
   this.mainMenu.defaultOptions = [
    {
      name: 'Home',
      icon: 'uil uil-estate',
      router:['/']
    },
    {
      name: 'Buscar',
      icon: 'uil uil-search',
      router:['/', 'history']
    },
    {
      name: 'Tu biblioteca',
      icon: 'uil uil-chart',
      router:['/', 'favorites']
    }

   ]
   this.mainMenu.accessLink = [
    {
      name: 'Crear Lista',
      icon: 'uil-plus-square'
    },
    {
      name: 'Canciones que te gustan',
      icon: 'uil-heart-medical'
    }

   ]
   this.customOptions = [
    {
      name : 'Lista °1',
      router: '/'
    },
    {
      name : 'Lista °2',
      router: '/'
    },
    {
      name : 'Lista °3',
      router: '/'
    },
    {
      name : 'Lista °4',
      router: '/'
    }
   ]
    
  }

}
