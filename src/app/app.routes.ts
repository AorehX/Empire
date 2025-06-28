import { Routes } from '@angular/router';
import { Products } from './products/products';
import { Notfound } from './notfound/notfound';
import { Home } from './home/home';



export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: Home},
    { path: 'products', component: Products },
    { path: '**', component: Notfound}
];
