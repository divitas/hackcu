import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' }, // Default route for the Landing page
    { path: 'landing', component: LandingPageComponent },
];
