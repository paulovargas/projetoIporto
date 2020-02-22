import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// [[Modulos da Aplicação]]
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPageScrollModule } from 'ngx-page-scroll';
// []
// [[Providers da Aplicação]]

// []
// [[Services da Aplicação]]

// []
// [[Componentes/Rotas da Aplicação]]
import { LocalAppModuleRoutes } from './routing';
// ----------------------------------------------------------------------------
import {
  CompanyIndexComponent,
  ContactIndexComponent
} from './index';
// ----------------------------------------------------------------------------
// []
@NgModule({
  imports: [
    LoadingBarHttpClientModule,
    CommonModule,
    RouterModule.forChild(LocalAppModuleRoutes),
    NgbModule,
    Angular2FontawesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    BsDropdownModule,
    ModalModule,
    CollapseModule,
    TooltipModule,
    TabsModule,
    NgxPageScrollModule
  ],
  declarations: [
    CompanyIndexComponent,
    ContactIndexComponent
  ],
  providers: [

  ]
})
export class PageModule { }
