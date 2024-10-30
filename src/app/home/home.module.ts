import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { SolutionsCarouselComponent } from './components/solutions-carousel/solutions-carousel.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SolutionsCardComponent } from './components/solutions-card/solutions-card.component';

@NgModule({
  declarations: [
    HomePageComponent,
    MainBannerComponent,
    SolutionsCarouselComponent,
    SolutionsCardComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
