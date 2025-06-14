import { Component, inject } from '@angular/core';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

import { SidebarService } from '@admin/app/core/layout/components/sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  imports: [AutoCompleteModule, AvatarModule, ButtonModule, MenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private sidebarService: SidebarService = inject(SidebarService);

  protected items: MenuItem[] = [
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

  protected toggleSidebar(): void {
    this.sidebarService.isVisible.update((isVisible) => !isVisible);
  }
}
