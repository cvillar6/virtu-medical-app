import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-features-card',
  templateUrl: './features-card.component.html',
  styleUrls: ['./features-card.component.scss'],
})
export class FeaturesCardComponent {
  @Input() legend: string = 'Solutions';
  @Input() title!: string;
  @Input() description!: string;
}
