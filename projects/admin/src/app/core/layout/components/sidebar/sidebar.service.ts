import { effect, inject, Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Menu } from '@admin/app/core/layout/components/sidebar/menu';
import { menus } from '@admin/assets/mocks/menus';
import { ScreenSizeService } from '@admin/app/core/layout/screen-size.service';
import { StorageService } from '@admin/app/core/storage/storage.service';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private readonly screenSizeService = inject(ScreenSizeService);
  private readonly storageService = inject(StorageService);

  public readonly isVisible = signal<boolean>(this.loadVisibleState());

  constructor() {
    effect(() => {
      this.storageService.set('app-sidebar-visible', this.isVisible());
    });
  }

  public getMenus(): Observable<Menu[]> {
    return of(menus);
  }

  private loadVisibleState(): boolean {
    const isVisible = this.storageService.get<boolean | null>('app-sidebar-visible');
    return isVisible ?? !this.screenSizeService.isMobile();
  }
}
