import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Restaurant } from 'src/app/models/restaurant';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent implements OnInit {
@Input() restaurant = new Restaurant();
  constructor(private ngbModal:NgbModal) { }

  ngOnInit(): void {
  }
openMenu(){
  const modalRef = this.ngbModal.open(MenuComponent);
    modalRef.componentInstance.restaurant =this.restaurant;
}
}
