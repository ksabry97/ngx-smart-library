import { Routes } from '@angular/router';
import { UnathourizedComponent } from '../../projects/ngx-dashboard-kit/src/lib/Auth-Module/components/unathourized/unathourized.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard-page/dashboard-page.component').then(
        (m) => m.DashboardPageComponent
      ),
  },
  {
    path: 'banks',
    loadComponent: () =>
      import('./banks/banks.component').then((m) => m.BanksComponent),
  },
  {
    path: 'analytics',
    loadComponent: () =>
      import('./analytics/analytics.component').then(
        (m) => m.AnalyticsComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login.component').then((m) => m.LoginComponent),
  },
  { path: 'unathourized', component: UnathourizedComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
