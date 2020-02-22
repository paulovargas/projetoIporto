import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// -----------------------------------------------------------------------------
import { LayoutSiteComponent } from '../pages/core';
// -----------------------------------------------------------------------------

const routes: Routes = [
  {
    path: '',
    component: LayoutSiteComponent,
    children: [
      {
        path: '',
        loadChildren: '../pages/modules/site/dashboard/module#DashboardModule'
      },
      {
        path: 'features',
        loadChildren: '../pages/modules/page/module#PageModule'
      }
    ]
  },
  {
    path: 'page',
    component: LayoutSiteComponent,
    children: [
      {
        path: '',
        loadChildren: '../pages/modules/page/module#PageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
