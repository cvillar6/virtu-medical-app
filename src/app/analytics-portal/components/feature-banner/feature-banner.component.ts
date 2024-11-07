import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-banner',
  templateUrl: './feature-banner.component.html',
  styleUrls: ['./feature-banner.component.scss'],
})
export class FeatureBannerComponent {
  @Input() title!: string;
  @Input() description!: string[];
  @Input() image!: string;
}
