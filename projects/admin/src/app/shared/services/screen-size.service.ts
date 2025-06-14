import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';

export enum ScreenSize {
  sm = '40rem',
  md = '48rem',
  lg = '64rem',
  xl = '80rem',
  ['2xl'] = '96rem',
}

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  private breakpointObserver: BreakpointObserver = inject(BreakpointObserver);

  public isMobile: WritableSignal<boolean> = signal(!this.match(ScreenSize.md));

  constructor() {
    this.observe(ScreenSize.md).subscribe({
      next: (isDesktop: boolean) => {
        this.isMobile.set(!isDesktop);
      },
    });
  }

  public observe(screenSize: ScreenSize): Observable<boolean> {
    return this.breakpointObserver
      .observe(`(min-width: ${screenSize})`)
      .pipe(map((state: BreakpointState) => state.matches));
  }

  private match(screenSize: ScreenSize): boolean {
    return typeof window !== 'undefined' ? window.matchMedia(`(min-width: ${screenSize})`).matches : false;
  }
}
