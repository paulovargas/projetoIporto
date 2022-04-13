import { Routes } from '@angular/router';

// ----------------------------------------------------------------------------
import {
  CompanyIndexComponent,
  ContactIndexComponent
} from './index';
// ----------------------------------------------------------------------------

export const LocalAppModuleRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'company',
        component: CompanyIndexComponent
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'contact',
        component: ContactIndexComponent
      }
    ]
  }
];
