import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsPortalPageComponent } from './pages/analytics-portal-page/analytics-portal-page.component';
import { ClaimsPageComponent } from './pages/claims-page/claims-page.component';
import { ComplexCasesPageComponent } from './pages/complex-cases-page/complex-cases-page.component';
import { LabsPageComponent } from './pages/labs-page/labs-page.component';
import { MembershipPageComponent } from './pages/membership-page/membership-page.component';
import { MraPageComponent } from './pages/mra-page/mra-page.component';
import { PharmacyPageComponent } from './pages/pharmacy-page/pharmacy-page.component';
import { ReportsPageComponent } from './pages/reports-page/reports-page.component';
import { RevenuePageComponent } from './pages/revenue-page/revenue-page.component';

const routes: Routes = [
  { path: '', component: AnalyticsPortalPageComponent },
  { path: 'membership', component: MembershipPageComponent },
  { path: 'complex-cases', component: ComplexCasesPageComponent },
  { path: 'pharmacy', component: PharmacyPageComponent },
  { path: 'labs', component: LabsPageComponent },
  { path: 'claims', component: ClaimsPageComponent },
  { path: 'mra', component: MraPageComponent },
  { path: 'revenue', component: RevenuePageComponent },
  { path: 'reports', component: ReportsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyticsPortalRoutingModule {}
