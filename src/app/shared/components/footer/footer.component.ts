import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserverService } from '../../services/breakpoint-observer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnDestroy {
  isDesktop: boolean = false;

  private _breakpointObserverSubscription: Subscription =
    this.breakpointObserverService.observeBreakpoints().subscribe(result => {
      result.breakpoints['(min-width: 1024px)']
        ? (this.isDesktop = true)
        : (this.isDesktop = false);
    });

  constructor(private breakpointObserverService: BreakpointObserverService) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
