import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './page/landing/landing.component';
import { MoviedetailComponent } from './components/moviedetail/moviedetail.component';
import { ThemdbComponent } from './page/themdb/themdb.component';
import { PopularComponent } from './components/popular/popular.component';

const routes: Routes = [
  {path: 'home', component: LandingComponent},
  {path: 'thmdb/:id', component: MoviedetailComponent},
  {path: 'popular', component: PopularComponent},
  {path: 'thmdb', component: ThemdbComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
