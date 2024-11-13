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
    throw new Error('Method not implemented.');
  }
}
