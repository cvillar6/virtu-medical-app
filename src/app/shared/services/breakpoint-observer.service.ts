import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreakpointObserverService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  observeBreakpoints(): Observable<BreakpointState> {
    return this.breakpointObserver.observe([
      '(max-width: 767px)',
      '(min-width: 768px) and (max-width: 1023px)',
      '(min-width: 1024px)',
    ]);
  }
}
