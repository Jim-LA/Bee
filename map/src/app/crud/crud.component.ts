import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  towns = [ 
    { id:1, ville: 'London', lat: 51.5074, lng: 0.1278 },
    { id:2, ville: 'Paris', lat: 48.8566, lng: 2.3522 },
    { id:3, ville: 'Madrid', lat: 40.4168, lng: -3.7038 },
    { id:4, ville: 'Berlin', lat: 52.5200, lng: 13.4050 },
    { id:5, ville: 'Rome', lat: 41.9028, lng: 12.4964 },];

    
    logTown(town: any) { //Method pour le click dans crud.components.html
      console.log(town);
    }
}
