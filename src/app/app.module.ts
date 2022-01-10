import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { RestaurantItemComponent } from './restaurants/restaurant-item/restaurant-item.component';
import { SideBarComponent } from './restaurants/side-bar/side-bar.component';
import { PaginationComponent } from './restaurants/pagination/pagination.component';
import { JoinComponent } from './join/join.component';

@NgModule({
  declarations: [
    AppComponent,
    
    RestaurantsComponent,
         NavbarComponent,
         HomeComponent,
         FooterComponent,
         RestaurantItemComponent,
         SideBarComponent,
         PaginationComponent,
         JoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
