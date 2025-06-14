import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Menu } from '@admin/app/core/layout/models/menu';
import { ScreenSizeService } from '@admin/app/shared/services/screen-size.service';
import { menus as menus } from '@admin/assets/mocks/menus';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  public isVisible: WritableSignal<boolean> = signal(!inject(ScreenSizeService).isMobile());

  public getMenus(): Observable<Menu[]> {
    return of(menus);
  }
}
