import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserverService } from 'src/app/shared/services/breakpoint-observer.service';

@Component({
  selector: 'app-features-carousel',
  templateUrl: './features-carousel.component.html',
  styleUrls: ['./features-carousel.component.scss'],
})
export class FeaturesCarouselComponent implements OnDestroy {
  isDesktop: boolean = false;

  private _breakpointObserverSubscription: Subscription =
    this.breakpointObserverService.observeBreakpoints().subscribe(result => {
      result.breakpoints['(min-width: 1024px)']
        ? (this.isDesktop = true)
        : (this.isDesktop = false);
    });

    breakpointsConfig = {
      320: { slidesPerView: 'auto' },
      1024: { slidesPerView: 1 },
    };

  constructor(private breakpointObserverService: BreakpointObserverService) {}

  ngOnDestroy(): void {
    this._breakpointObserverSubscription.unsubscribe();
  }
}
