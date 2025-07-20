import { Component, computed, inject } from '@angular/core';

import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

import { SidebarService } from '@admin/app/core/layout/components/sidebar/sidebar.service';
import { ThemeService } from '@admin/app/core/theme/theme.service';

@Component({
  selector: 'app-header',
  imports: [AvatarModule, ButtonModule, MenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private readonly sidebarService = inject(SidebarService);
  protected readonly themeService = inject(ThemeService);

  protected items: MenuItem[] = this.buildMenuItems();

  protected readonly themeIcon = computed(() => `pi pi-${this.themeService.isDarkMode() ? 'moon' : 'sun'}`);

  protected toggle(): void {
    this.sidebarService.isVisible.update((isVisible) => !isVisible);
  }

  private buildMenuItems(): MenuItem[] {
    return [
      {
        separator: true,
      },
      {
        label: 'Perfil',
        icon: PrimeIcons.USER,
      },
      {
        label: 'Cerrar sessión',
        icon: PrimeIcons.SIGN_OUT,
      },
    ];
  }
}
