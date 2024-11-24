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

  recipient = 'example@example.com'; // Replace with the actual recipient's email
  subject = 'Your Subject Here'; // Replace with the email subject
  body = 'Hello, this is the body of the email.'; // Replace with the email body

  get emailHref(): string {
    return `mailto:${this.recipient}?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.body)}`;
  }
}
