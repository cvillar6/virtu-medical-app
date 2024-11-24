import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesPageComponent } from './pages/resources-page/resources-page.component';
import { BlogComponent } from './components/blog/blog.component';
import { Blog1PageComponent } from './pages/blog1-page/blog1-page.component';
import { Blog2PageComponent } from './pages/blog2-page/blog2-page.component';
import { Blog3PageComponent } from './pages/blog3-page/blog3-page.component';
import { Blog4PageComponent } from './pages/blog4-page/blog4-page.component';

@NgModule({
  declarations: [
    ResourcesPageComponent,
    BlogComponent,
    Blog1PageComponent,
    Blog2PageComponent,
    Blog3PageComponent,
    Blog4PageComponent
  ],
  imports: [CommonModule, ResourcesRoutingModule],
})
export class ResourcesModule {}
