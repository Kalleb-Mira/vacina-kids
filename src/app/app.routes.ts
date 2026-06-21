import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard/dashboard.page').then((m) => m.DashboardPage),
  },
  {
    path: 'children',
    loadComponent: () =>
      import('./children/children.page').then((m) => m.ChildrenPage),
  },
  {
    path: 'children/:id',
    loadComponent: () =>
      import('./child-details/child-details.page').then((m) => m.ChildDetailsPage),
  },
  {
    path: 'campaigns',
    loadComponent: () => import('./campaigns/campaigns.page').then( m => m.CampaignsPage)
  },
];
