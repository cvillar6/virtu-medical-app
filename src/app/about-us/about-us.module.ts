import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { BannerComponent } from './components/banner/banner.component';
import { AvatarComponent } from './components/avatar/avatar.component';

@NgModule({
  declarations: [
    AboutUsPageComponent,
    BannerComponent,
    AvatarComponent
  ],
  imports: [CommonModule, AboutUsRoutingModule],
})
export class AboutUsModule {}
