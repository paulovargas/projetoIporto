import { Routes } from '@angular/router';

// ----------------------------------------------------------------------------
import { DashboardIndexComponent } from './index/component';
// ----------------------------------------------------------------------------

export const LocalAppModuleRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardIndexComponent
      }
    ]
  }
];
