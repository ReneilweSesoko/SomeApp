import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { LandingComponent } from './page/landing/landing.component';
import { MoviedetailComponent } from './components/moviedetail/moviedetail.component';
import { ThemdbComponent } from './page/themdb/themdb.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MoviedetailComponent,
    ThemdbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
