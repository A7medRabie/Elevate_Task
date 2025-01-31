import { Routes } from '@angular/router';
import { ProductdetailsComponent } from '../components/productdetails/productdetails.component';
import { ProductsComponent } from '../components/products/products.component';

export const routes: Routes = [
    {path:"",redirectTo:"products", pathMatch:('full')},
    {path:"products",component:ProductsComponent},
    {path:"productdetails/:id",component:ProductdetailsComponent},

];
