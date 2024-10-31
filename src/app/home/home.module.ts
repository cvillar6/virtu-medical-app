import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { SolutionsCarouselComponent } from './components/solutions-carousel/solutions-carousel.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SolutionsCardComponent } from './components/solutions-card/solutions-card.component';
import { FeaturesCarouselComponent } from './components/features-carousel/features-carousel.component';
import { FeaturesCardComponent } from './components/features-card/features-card.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FeedbackCardComponent } from './components/feedback-card/feedback-card.component';
import { InfoComponent } from './components/info/info.component';
import { PartnersComponent } from './components/partners/partners.component';

@NgModule({
  declarations: [
    HomePageComponent,
    MainBannerComponent,
    SolutionsCarouselComponent,
    SolutionsCardComponent,
    FeaturesCarouselComponent,
    FeaturesCardComponent,
    FeedbackComponent,
    FeedbackCardComponent,
    InfoComponent,
    PartnersComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
