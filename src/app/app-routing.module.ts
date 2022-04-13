import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// -----------------------------------------------------------------------------
import { LayoutSiteComponent } from '../project/core';
// -----------------------------------------------------------------------------

const routes: Routes = [
  {
    path: '',
    component: LayoutSiteComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("../project/modules/site/dashboard/module").then((m) => m.DashboardModule),
      },
    ]
  },
  {
    path: 'page',
    component: LayoutSiteComponent,
    children: [
      {
        path: '',
        loadChildren: () => import("../project/modules/page/module").then((m) => m.PageModule),
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
