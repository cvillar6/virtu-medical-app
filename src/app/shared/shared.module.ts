import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ContactUsFormComponent } from './components/contact-us-form/contact-us-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ContactUsFormComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
