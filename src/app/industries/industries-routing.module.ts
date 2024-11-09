import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcoPageComponent } from './pages/aco-page/aco-page.component';
import { IndustriesPageComponent } from './pages/industries-page/industries-page.component';

const routes: Routes = [
  { path: '', component: IndustriesPageComponent },
  { path: 'aco', component: AcoPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndustriesRoutingModule {}
