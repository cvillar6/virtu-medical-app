import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FeaturesCarouselComponent } from './components/features-carousel/features-carousel.component';
import { IndustriesRoutingModule } from './industries-routing.module';
import { IndustriesPageComponent } from './pages/industries-page/industries-page.component';
import { FeaturesCardComponent } from './components/features-card/features-card.component';

@NgModule({
  declarations: [IndustriesPageComponent, FeaturesCarouselComponent, FeaturesCardComponent],
  imports: [CommonModule, IndustriesRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IndustriesModule {}
