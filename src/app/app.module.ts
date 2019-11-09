import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
import { UrlShorteningComponent } from './url-shortening/url-shortening.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from "@angular/forms";
import { SuperHeroComponent } from './super-hero/super-hero.component';
import { HttpClientModule } from "@angular/common/http";
import {setTheme} from "ngx-bootstrap";
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    UrlShorteningComponent,
    HomeComponent,
    SuperHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    setTheme('bs4');
  }
}
