import { Routes } from '@angular/router';

import { LayoutComponent } from '@admin/app/core/layout/layout.component';

export const routes: Routes = [
  /* --------------------------------------------------
   * Redirection
   * --------------------------------------------------*/
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  /* --------------------------------------------------
   * Routes
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

  /* --------------------------------------------------
   * Login
   * --------------------------------------------------*/
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login'),
  },

  /* --------------------------------------------------
   * Wildcard (catch-all)
   * --------------------------------------------------*/
  { path: '**', redirectTo: 'home' },
];
