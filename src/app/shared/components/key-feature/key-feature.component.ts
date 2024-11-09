import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-key-feature',
  templateUrl: './key-feature.component.html',
  styleUrls: ['./key-feature.component.scss'],
})
export class KeyFeatureComponent {
  @Input() title!: string;
  @Input() description!: string;
}
