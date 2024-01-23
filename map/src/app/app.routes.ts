import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { CrudComponent } from './crud/crud.component';

export const routes: Routes = [
    {path: '', title: 'Accueil', component: HomeComponent},
    {path: 'map', title: 'Carte', component: MapComponent},
    {path: 'crud', title: 'Villes', component: CrudComponent},
    {path: '**', component: HomeComponent}
    
];
