import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// [[Modulos da Aplicação]]
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TabsModule } from 'ngx-bootstrap/tabs';
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
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule,
    ModalModule,
    CollapseModule,
    TooltipModule,
    TabsModule,
  ],
  declarations: [
    CompanyIndexComponent,
    ContactIndexComponent
  ],
  providers: [

  ]
})
export class PageModule { }
