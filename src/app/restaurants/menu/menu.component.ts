import { RestaurantService } from './../../services/restaurant.service';
import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';
import { MenuList } from 'src/app/models/manuList';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
@Input()restaurant = new Restaurant();
menuList = new MenuList();
  constructor(private service:RestaurantService,public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.getMenus();
  }
getMenus(){
  this.service.getMenus(this.restaurant._id).subscribe((data:any)=>{
    this.menuList = data;
  })
}
}
