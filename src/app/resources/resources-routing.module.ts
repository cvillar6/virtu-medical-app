import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Blog1PageComponent } from './pages/blog1-page/blog1-page.component';
import { Blog2PageComponent } from './pages/blog2-page/blog2-page.component';
import { Blog3PageComponent } from './pages/blog3-page/blog3-page.component';
import { Blog4PageComponent } from './pages/blog4-page/blog4-page.component';
import { ResourcesPageComponent } from './pages/resources-page/resources-page.component';

const routes: Routes = [
  { path: '', component: ResourcesPageComponent },
  { path: 'blog-1', component: Blog1PageComponent },
  { path: 'blog-2', component: Blog2PageComponent },
  { path: 'blog-3', component: Blog3PageComponent },
  { path: 'blog-4', component: Blog4PageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourcesRoutingModule {}
