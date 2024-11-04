import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserverService } from '../../services/breakpoint-observer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  isExpanded: boolean = false;
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

  expandMenu(): void {
    this.isExpanded = !this.isExpanded;
  }
}
