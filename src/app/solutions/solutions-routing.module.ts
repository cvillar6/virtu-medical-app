import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisenrollmentPageComponent } from './pages/disenrollment-page/disenrollment-page.component';
import { HospitalizationPageComponent } from './pages/hospitalization-page/hospitalization-page.component';
import { ImagingPageComponent } from './pages/imaging-page/imaging-page.component';
import { PatientOutreachPageComponent } from './pages/patient-outreach-page/patient-outreach-page.component';
import { ReferralManagementPageComponent } from './pages/referral-management-page/referral-management-page.component';
import { TransportationPageComponent } from './pages/transportation-page/transportation-page.component';

const routes: Routes = [
  {
    path: 'analytics-portal',
    loadChildren: () =>
      import('./../analytics-portal/analytics-portal.module').then(
        m => m.AnalyticsPortalModule
      ),
  },
  {
    path: 'hospitalization',
    component: HospitalizationPageComponent,
  },
  {
    path: 'imaging',
    component: ImagingPageComponent,
  },
  {
    path: 'patient-outreach',
    component: PatientOutreachPageComponent,
  },
  {
    path: 'referral-management',
    component: ReferralManagementPageComponent,
  },
  {
    path: 'disenrollment',
    component: DisenrollmentPageComponent,
  },
  {
    path: 'transportation',
    component: TransportationPageComponent,
  },
  {
    path: '**',
    redirectTo: 'analytics-portal',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionsRoutingModule {}
