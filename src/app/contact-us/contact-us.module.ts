import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ContactUsFormComponent } from './components/contact-us-form/contact-us-form.component';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';

@NgModule({
  declarations: [
    ContactUsPageComponent,
    ContactCardComponent,
    ContactUsFormComponent,
  ],
  imports: [CommonModule, ContactUsRoutingModule, ReactiveFormsModule],
})
export class ContactUsModule {}
