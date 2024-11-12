import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';

@NgModule({
  declarations: [
    ContactUsPageComponent
  ],
  imports: [CommonModule, ContactUsRoutingModule],
})
export class ContactUsModule {}
