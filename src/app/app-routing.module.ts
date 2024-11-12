import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'analytics-portal',
    loadChildren: () =>
      import('./analytics-portal/analytics-portal.module').then(
        m => m.AnalyticsPortalModule
      ),
  },
  {
    path: 'industries',
    loadChildren: () =>
      import('./industries/industries.module').then(m => m.IndustriesModule),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./about-us/about-us.module').then(m => m.AboutUsModule),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./contact-us/contact-us.module').then(m => m.ContactUsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
