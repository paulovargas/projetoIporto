import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
  imports: [
    FormsModule,
    RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
