import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/landing-page', pathMatch: 'full' }, // Default route for the Landing page
    { path: 'landing-page', component: LandingPageComponent },
    { path: 'summary-page', component: SummaryPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}