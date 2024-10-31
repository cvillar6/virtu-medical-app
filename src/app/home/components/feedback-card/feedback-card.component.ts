import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.scss'],
})
export class FeedbackCardComponent {
  @Input() name!: string;
  @Input() photo!: string;
  @Input() date!: string;
  @Input() feedback!: string;
}
