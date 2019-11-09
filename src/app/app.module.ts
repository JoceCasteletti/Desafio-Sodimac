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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
