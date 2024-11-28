import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserverService } from 'src/app/shared/services/breakpoint-observer.service';

@Component({
  selector: 'app-solutions-card',
  templateUrl: './solutions-card.component.html',
  styleUrls: ['./solutions-card.component.scss'],
})
export class SolutionsCardComponent implements OnDestroy {
  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;

  isDesktop: boolean = false;

  private _breakpointObserverSubscription: Subscription =
    this.breakpointObserverService.observeBreakpoints().subscribe(result => {
      result.breakpoints['(min-width: 1024px)']
        ? (this.isDesktop = true)
        : (this.isDesktop = false);
    });

  constructor(private breakpointObserverService: BreakpointObserverService) {}

  ngOnDestroy(): void {
    this._breakpointObserverSubscription.unsubscribe();
  }
}
