import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
@Input()page = 1;
@Input()pageSize = 12;
@Input()collectionSize = 1;
pages:number[] = [];
@Output()pageChanged = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges():void{
    this.pages = []
    for(let i=1; i<this.getNoPages();i++){
      this.pages.push(i)
    }
  }
  getNoPages(){
    return Math.ceil(this.collectionSize / this.pageSize)
  }

  onPrevousPage(){
   this.pageChanged.emit(this.page-1)
  }
  onNextPage(){
  this.pageChanged.emit(this.page+1)
      }

  changePage(newPage:number){
    this.pageChanged.emit(newPage)
  }
}
