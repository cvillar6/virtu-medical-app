import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { SharedModule } from '../shared/shared.module';
import { AnalyticsPortalRoutingModule } from './analytics-portal-routing.module';
import { FeaturesComponent } from './components/features/features.component';
import { AnalyticsPortalPageComponent } from './pages/analytics-portal-page/analytics-portal-page.component';

@NgModule({
  declarations: [AnalyticsPortalPageComponent, FeaturesComponent],
  imports: [
    CommonModule,
    AnalyticsPortalRoutingModule,
    MatExpansionModule,
    SharedModule,
  ],
})
export class AnalyticsPortalModule {}
