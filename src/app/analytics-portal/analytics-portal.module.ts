import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { SharedModule } from '../shared/shared.module';
import { AnalyticsPortalRoutingModule } from './analytics-portal-routing.module';
import { FeaturesComponent } from './components/features/features.component';
import { AnalyticsPortalPageComponent } from './pages/analytics-portal-page/analytics-portal-page.component';
import { ClaimsPageComponent } from './pages/claims-page/claims-page.component';
import { ComplexCasesPageComponent } from './pages/complex-cases-page/complex-cases-page.component';
import { LabsPageComponent } from './pages/labs-page/labs-page.component';
import { MembershipPageComponent } from './pages/membership-page/membership-page.component';
import { MraPageComponent } from './pages/mra-page/mra-page.component';
import { PharmacyPageComponent } from './pages/pharmacy-page/pharmacy-page.component';
import { ReportsPageComponent } from './pages/reports-page/reports-page.component';
import { RevenuePageComponent } from './pages/revenue-page/revenue-page.component';

@NgModule({
  declarations: [
    AnalyticsPortalPageComponent,
    FeaturesComponent,
    MembershipPageComponent,
    ComplexCasesPageComponent,
    PharmacyPageComponent,
    LabsPageComponent,
    ClaimsPageComponent,
    MraPageComponent,
    RevenuePageComponent,
    ReportsPageComponent,
  ],
  imports: [
    CommonModule,
    AnalyticsPortalRoutingModule,
    MatExpansionModule,
    SharedModule,
  ],
})
export class AnalyticsPortalModule {}
