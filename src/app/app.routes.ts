import {Routes} from '@angular/router';
import {Products} from './products/products';
import {Notfound} from './notfound/notfound';
import {Home} from './home/home';
import {Service} from './service/service';
import {ProductItems} from './products/product-items/product-items';


export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'products', component: Products,
  children: [
    {path: 'items', component: ProductItems}
  ]},
  {path: 'services', component: Service},
  {path: '**', component: Notfound}
];
