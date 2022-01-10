import { JoinComponent } from './join/join.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "join", component: JoinComponent },
  { path: "restaurants", component: RestaurantsComponent },
  { path: "restaurants/:cuisine", component: RestaurantsComponent },
  { path: '', redirectTo: '/home', pathMatch:"full" }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
