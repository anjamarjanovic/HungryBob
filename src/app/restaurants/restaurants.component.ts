import { ActivatedRoute } from '@angular/router';
import { RestaurantList } from './../models/restaurantList';
import { RestaurantService } from './../services/restaurant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
restaurantList:RestaurantList =  new RestaurantList();

params={
  page:1,
  pageSize:12,
  filter:{
    priceFrom:1,
    priceTo:5,
    cuisine:''
  }
}
  constructor(private service:RestaurantService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      let cuisine = params['cuisine']
      if(cuisine == 'all') cuisine = '';
      this.params.filter.cuisine = cuisine;
      this.params.page = 1; 
      this.getAllRest()
    })

  }
getAllRest(){
  this.service.getAll(this.params).subscribe((data:any)=>{
    this.restaurantList = data;
    console.log(this.restaurantList)
  })
}
onPageChanged(newPage:number){
  this.params.page = newPage;
  this.getAllRest()
}
}
