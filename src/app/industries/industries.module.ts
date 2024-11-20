import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FeaturesCardComponent } from './components/features-card/features-card.component';
import { FeaturesCarouselComponent } from './components/features-carousel/features-carousel.component';
import { IndustriesRoutingModule } from './industries-routing.module';
import { AcoPageComponent } from './pages/aco-page/aco-page.component';
import { IndustriesPageComponent } from './pages/industries-page/industries-page.component';
import { ValueBasedCarePageComponent } from './pages/value-based-care-page/value-based-care-page.component';
import { MedicarePageComponent } from './pages/medicare-page/medicare-page.component';
import { HospitalsPageComponent } from './pages/hospitals-page/hospitals-page.component';
import { MedicareAdvantagePageComponent } from './pages/medicare-advantage-page/medicare-advantage-page.component';
import { PhysicianPageComponent } from './pages/physician-page/physician-page.component';

@NgModule({
  declarations: [
    IndustriesPageComponent,
    FeaturesCarouselComponent,
    FeaturesCardComponent,
    AcoPageComponent,
    ValueBasedCarePageComponent,
    MedicarePageComponent,
    HospitalsPageComponent,
    MedicareAdvantagePageComponent,
    PhysicianPageComponent,
  ],
  imports: [CommonModule, IndustriesRoutingModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IndustriesModule {}
