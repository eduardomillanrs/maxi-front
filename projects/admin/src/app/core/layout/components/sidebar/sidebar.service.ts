import { effect, inject, Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Menu } from '@admin/app/core/layout/components/sidebar/menu';
import { ScreenSizeService } from '@admin/app/core/layout/services';
import { StorageService } from '@admin/app/core/storage/storage.service';

import { menus } from '@admin/assets/mocks/menus';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private readonly screenSizeService = inject(ScreenSizeService);
  private readonly storageService = inject(StorageService);

  public readonly isVisible = signal<boolean>(this.loadVisibility());

  constructor() {
    effect(() => {
      this.storageService.set('app-sidebar-visible', this.isVisible());
    });
  }

  public getMenus(): Observable<Menu[]> {
    return of(menus);
  }

  private loadVisibility(): boolean {
    if (this.screenSizeService.isMobile()) {
      return false;
    }

    return this.storageService.get<boolean>('app-sidebar-visible') ?? true;
  }
}
