import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss'],
})
export class ContactUsFormComponent {
  contactUsForm = this.formBuilder.group({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    const emailHref = `mailto:virtu@gmail.com?subject=Virtu&body=${this.contactUsForm.value.name}%0D%0A${this.contactUsForm.value.email}%0D%0A${this.contactUsForm.value.phone}%0D%0A${this.contactUsForm.value.message}`;
    window.open(emailHref, '_blank');
  }
}
