import { Component, effect, inject, OnInit } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TooltipModule } from 'primeng/tooltip';

import { Menu } from '@admin/app/core/layout/components/sidebar/menu';
import { ScreenSizeService } from '@admin/app/core/layout/screen-size.service';
import { SidebarService } from '@admin/app/core/layout/components/sidebar/sidebar.service';

const CLOSED_MENU_INDEX = 0;

@Component({
  selector: 'app-sidebar',
  imports: [
    NgTemplateOutlet,
    RouterLink,
    AccordionModule,
    ButtonModule,
    DrawerModule,
    MenuModule,
    ScrollPanelModule,
    TooltipModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  private readonly screenSizeService = inject(ScreenSizeService);
  private readonly sidebarService = inject(SidebarService);

  protected activeMenuIndex = CLOSED_MENU_INDEX;
  protected isMobile = this.screenSizeService.isMobile.asReadonly();
  protected isVisible = this.sidebarService.isVisible;

  protected items: MenuItem[] = this.buildMenuItems();
  protected menus: Menu[] = [];

  constructor() {
    effect(() => {
      if (!this.isVisible()) {
        this.activeMenuIndex = CLOSED_MENU_INDEX;
      }
    });
  }

  public ngOnInit(): void {
    this.loadMenus();
  }

  protected openMenu(): void {
    if (!this.isVisible()) {
      this.isVisible.set(true);
    }
  }

  private loadMenus(): void {
    this.sidebarService.getMenus().subscribe({
      next: (menus: Menu[]) => {
        this.menus = menus.sort((a, b) => a.name.localeCompare(b.name));
      },
      error: (error) => {
        console.error(error);
        this.menus = [];
      },
    });
  }

  private buildMenuItems(): MenuItem[] {
    return [
      {
        label: 'Unidades de negocio',
        items: [
          {
            label: 'Almadera',
            icon: PrimeIcons.BRIEFCASE,
          },
          {
            label: 'Casa Atura',
            icon: PrimeIcons.BRIEFCASE,
          },
          {
            label: 'Rentit',
            icon: PrimeIcons.BRIEFCASE,
          },
        ],
      },
    ];
  }
}
