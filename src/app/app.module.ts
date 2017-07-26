import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MobileComponent } from './mobile/mobile.component';
import { WebComponent } from './web/web.component';
import { DesktopComponent } from './desktop/desktop.component';
import { GamesComponent } from './games/games.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { TechComponent } from './tech/tech.component';
import { ListComponent } from './list/list.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'web',      component: WebComponent },
  { path: 'mobile',      component: MobileComponent },
  { path: 'desktop',      component: DesktopComponent },
  { path: 'games',      component: GamesComponent },
  { path: 'about',      component: AboutComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    WebComponent,
    DesktopComponent,
    GamesComponent,
    DetailComponent,
    HomeComponent,
    TechComponent,
    ListComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(
    appRoutes
    ),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
