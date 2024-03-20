import { Routes } from '@angular/router';
import { HomeComponent } from './components/content/home/home.component';
import { AboutComponent } from './components/content/about/about.component';
import { ServicesComponent } from './components/content/services/services.component';
import { ContactComponent } from './components/content/contact/contact.component';
import { SendReviewsComponent } from './components/content/add-review/add-review.component';
import { GetReviewsComponent } from './components/content/reviews/reviews.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'add-review', component: SendReviewsComponent },
    { path: 'reviews', component: GetReviewsComponent },
    { path: '**', redirectTo: 'home' }
];
