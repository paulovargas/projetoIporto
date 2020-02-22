import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// [[Layout]]
import {
  // [[Base]]
  LayoutSiteComponent,
  SitelHeaderComponent,
  SitelFooterComponent
  // []
  // [[Modulo de Autenticação]]
  // []
  // [[Modulo de Panel]]
  // []
} from '../pages/core';
// []

@NgModule({
  declarations: [
    AppComponent,
    // [[Base]]
    LayoutSiteComponent,
    SitelHeaderComponent,
    SitelFooterComponent
    // []
    // [[Layout Base for Auth]]
    // []
    // [[Modulo de Panel]]
    // []
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    Angular2FontawesomeModule,
    NgbModule,
    NgSelectModule,
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    NgxPageScrollCoreModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
