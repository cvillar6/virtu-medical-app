import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcoPageComponent } from './pages/aco-page/aco-page.component';
import { HospitalsPageComponent } from './pages/hospitals-page/hospitals-page.component';
import { IndustriesPageComponent } from './pages/industries-page/industries-page.component';
import { MedicareAdvantagePageComponent } from './pages/medicare-advantage-page/medicare-advantage-page.component';
import { MedicarePageComponent } from './pages/medicare-page/medicare-page.component';
import { PhysicianPageComponent } from './pages/physician-page/physician-page.component';
import { ValueBasedCarePageComponent } from './pages/value-based-care-page/value-based-care-page.component';

const routes: Routes = [
  { path: '', component: IndustriesPageComponent },
  { path: 'aco', component: AcoPageComponent },
  { path: 'value-based-care', component: ValueBasedCarePageComponent },
  { path: 'medicare', component: MedicarePageComponent },
  { path: 'hospitals', component: HospitalsPageComponent },
  { path: 'medicare-advantage', component: MedicareAdvantagePageComponent },
  { path: 'physician', component: PhysicianPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndustriesRoutingModule {}
