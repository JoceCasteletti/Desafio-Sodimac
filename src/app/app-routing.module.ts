import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { UrlShorteningComponent } from "./url-shortening/url-shortening.component";
import { StocksComponent } from "./stocks/stocks.component";
import { SuperHeroComponent } from "./super-hero/super-hero.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'stocks', component: StocksComponent },
  { path: 'url-shortening', component: UrlShorteningComponent },
  { path: 'super-hero', component: SuperHeroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
