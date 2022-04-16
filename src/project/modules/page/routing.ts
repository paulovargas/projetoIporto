import { Routes } from '@angular/router';
import { CreateAccountComponent } from 'src/app/account/create-account/create-account.component';
import { LoginComponent } from 'src/app/account/login/login.component';
import { AuthGuard } from 'src/app/account/shared/auth.guard';
import { AuthenticationComponent } from 'src/app/layout/authentication/authentication.component';
import { User } from 'src/app/account/user/user.component';

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
        children: [
          { 
          path: '',
          component: User,
          children: [
            { path: '', component: User }
          ],
          canActivate: [AuthGuard]
         },
         {
          path: '',
          component: AuthenticationComponent,
          children: [
            { path: '', redirectTo: 'login', pathMatch: 'full'},
            { path: 'login', component: LoginComponent},
            { path: 'create-account', component: CreateAccountComponent }
          ]
        }],
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
