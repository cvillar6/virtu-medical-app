import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsPortalPageComponent } from './pages/analytics-portal-page/analytics-portal-page.component';
import { HospitalizationPageComponent } from './pages/hospitalization-page/hospitalization-page.component';
import { ImagingPageComponent } from './pages/imaging-page/imaging-page.component';

const routes: Routes = [
  { path: '', component: AnalyticsPortalPageComponent },
  {
    path: 'hospitalization',
    component: HospitalizationPageComponent,
  },
  {
    path: 'imaging',
    component: ImagingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyticsPortalRoutingModule {}
