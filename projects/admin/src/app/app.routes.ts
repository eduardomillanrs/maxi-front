import { Routes } from '@angular/router';

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
