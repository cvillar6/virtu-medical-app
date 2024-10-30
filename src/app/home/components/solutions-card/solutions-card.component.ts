import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-solutions-card',
  templateUrl: './solutions-card.component.html',
  styleUrls: ['./solutions-card.component.scss'],
})
export class SolutionsCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() list!: string[];
}
