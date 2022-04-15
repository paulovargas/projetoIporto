import { Routes } from '@angular/router';

// ----------------------------------------------------------------------------
import {
  ClientAreaIndexComponent,
  CompanyIndexComponent,
  PlansIndexComponent,
  ContactIndexComponent
} from './index';
// ----------------------------------------------------------------------------

export const LocalAppModuleRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'clientArea',
        component: ClientAreaIndexComponent
      }
    ]
  },
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
        path: 'plans',
        component: PlansIndexComponent
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
