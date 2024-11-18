import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HospitalizationPageComponent } from './pages/hospitalization-page/hospitalization-page.component';
import { ImagingPageComponent } from './pages/imaging-page/imaging-page.component';
import { PatientOutreachPageComponent } from './pages/patient-outreach-page/patient-outreach-page.component';
import { SolutionsRoutingModule } from './solutions-routing.module';

@NgModule({
  declarations: [
    HospitalizationPageComponent,
    ImagingPageComponent,
    PatientOutreachPageComponent,
  ],
  imports: [CommonModule, SolutionsRoutingModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SolutionsModule {}
