import { Routes } from '@angular/router';

import { LayoutComponent } from '@admin/app/core/layout/layout.component';

export const routes: Routes = [
  /* --------------------------------------------------
   * Redirection
   * --------------------------------------------------*/
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },

  /* --------------------------------------------------
   * Admin
   * --------------------------------------------------*/
  {
    path: '',
    component: LayoutComponent,
    children: [
      /* --------------------------------------------------
       * Home
       * --------------------------------------------------*/
      {
        path: 'home',
        loadComponent: () => import('./features/home'),
      },
    ],
  },
];
