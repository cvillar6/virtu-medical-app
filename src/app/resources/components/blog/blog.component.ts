import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() link!: string;
}
