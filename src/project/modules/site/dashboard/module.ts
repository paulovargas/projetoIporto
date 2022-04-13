import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// [[Modulos da Aplicação]]
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
// []
// [[Providers da Aplicação]]

// []
// [[Componentes/Rotas da Aplicação]]
import { LocalAppModuleRoutes } from './routing';
// ----------------------------------------------------------------------------
import { DashboardIndexComponent } from './index';
// ----------------------------------------------------------------------------
// []
@NgModule({
  imports: [
    LoadingBarHttpClientModule,
    CommonModule,
    RouterModule.forChild(LocalAppModuleRoutes),
    ProgressbarModule
  ],
  declarations: [
    DashboardIndexComponent
  ],
  providers: [

  ]
})
export class DashboardModule { }
