import { Component, effect, inject, OnInit, Signal, WritableSignal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TooltipModule } from 'primeng/tooltip';

import { Menu } from '@admin/app/core/layout/models/menu';
import { ScreenSizeService } from '@admin/app/shared/services/screen-size.service';
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
  private screenSizeService: ScreenSizeService = inject(ScreenSizeService);
  private sidebarService: SidebarService = inject(SidebarService);

  protected activeMenuIndex: number = CLOSED_MENU_INDEX;
  protected isMobile: Signal<boolean> = this.screenSizeService.isMobile.asReadonly();
  protected isVisible: WritableSignal<boolean> = this.sidebarService.isVisible;

  protected menus: Menu[] = [];
  protected items: MenuItem[] = [
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
}
