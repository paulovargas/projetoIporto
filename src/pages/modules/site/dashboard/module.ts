import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// [[Modulos da Aplicação]]
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
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
    NgbModule,
    Angular2FontawesomeModule,
    ProgressbarModule
  ],
  declarations: [
    DashboardIndexComponent
  ],
  providers: [

  ]
})
export class DashboardModule { }
