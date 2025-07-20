import { inject, Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Menu } from '@admin/app/core/layout/components/sidebar/menu';
import { menus } from '@admin/assets/mocks/menus';
import { ScreenSizeService } from '@admin/app/core/layout/screen-size.service';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private readonly screenSizeService = inject(ScreenSizeService);

  public readonly isVisible = signal<boolean>(this.screenSizeService.isMobile());

  public getMenus(): Observable<Menu[]> {
    return of(menus);
  }
}
