import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserverService } from 'src/app/shared/services/breakpoint-observer.service';

@Component({
  selector: 'app-solutions-carousel',
  templateUrl: './solutions-carousel.component.html',
  styleUrls: ['./solutions-carousel.component.scss'],
})
export class SolutionsCarouselComponent implements OnDestroy {
  isDesktop: boolean = false;

  breakpointsConfig = {
    320: { slidesPerView: 'auto' },
    1024: { slidesPerView: 1 },
  };

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
