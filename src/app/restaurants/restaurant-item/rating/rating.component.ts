import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
@Input()fullIcon: any;
@Input()emptyIcon: any; 
  @Input()
  grade!: number;

fullArray = new Array()
emptyArray = new Array()
  constructor() { }

  ngOnInit(): void {
   this.fullArray = new Array(this.grade)
  this.emptyArray = new Array(5-this.grade)
  }

}
