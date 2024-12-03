import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DisenrollmentPageComponent } from './pages/disenrollment-page/disenrollment-page.component';
import { HospitalizationPageComponent } from './pages/hospitalization-page/hospitalization-page.component';
import { ImagingPageComponent } from './pages/imaging-page/imaging-page.component';
import { PatientOutreachPageComponent } from './pages/patient-outreach-page/patient-outreach-page.component';
import { ReferralManagementPageComponent } from './pages/referral-management-page/referral-management-page.component';
import { TransportationPageComponent } from './pages/transportation-page/transportation-page.component';
import { SolutionsRoutingModule } from './solutions-routing.module';

@NgModule({
  declarations: [
    HospitalizationPageComponent,
    ImagingPageComponent,
    PatientOutreachPageComponent,
    ReferralManagementPageComponent,
    DisenrollmentPageComponent,
    TransportationPageComponent,
  ],
  imports: [CommonModule, SolutionsRoutingModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SolutionsModule {}
