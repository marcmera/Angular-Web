import { Routes } from '@angular/router';
import { HomeComponent } from './components/content/home/home.component';
import { AboutComponent } from './components/content/about/about.component';
import { ServicesComponent } from './components/content/services/services.component';
import { ContactComponent } from './components/content/contact/contact.component';
import { SendProductsComponent } from './components/content/add-products/add-products.component';
import { GetProductsComponent } from './components/content/products/products.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'add-product', component: SendProductsComponent },
    { path: 'products', component: GetProductsComponent },
    { path: '**', redirectTo: 'home' }
];
