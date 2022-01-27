import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { LandingComponent } from './page/landing/landing.component';
import { MoviedetailComponent } from './components/moviedetail/moviedetail.component';
import { ThemdbComponent } from './page/themdb/themdb.component';
import { PopularComponent } from './components/popular/popular.component';
import { LatestComponent } from './components/latest/latest.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MoviedetailComponent,
    ThemdbComponent,
    PopularComponent,
    LatestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
