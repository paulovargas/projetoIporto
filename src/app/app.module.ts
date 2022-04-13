import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

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
} from '../project/core';
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
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
