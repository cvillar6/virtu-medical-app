import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsPortalPageComponent } from './pages/analytics-portal-page/analytics-portal-page.component';
import { HospitalizationPageComponent } from './pages/hospitalization-page/hospitalization-page.component';
import { ReferralManagementPageComponent } from './pages/referral-management-page/referral-management-page.component';
import { DisenrollmentPageComponent } from './pages/disenrollment-page/disenrollment-page.component';


const routes: Routes = [
  { path: '', component: AnalyticsPortalPageComponent },
  {
    path: 'hospitalization',
    component: HospitalizationPageComponent,
  },
  {
    path: 'referral-management',
    component: ReferralManagementPageComponent,
  },
  {
    path: 'disenrollment',
    component: DisenrollmentPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyticsPortalRoutingModule {}
