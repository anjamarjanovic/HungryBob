import { DayList } from "./dayList";

export class Restaurant{
    name: string;
    cuisine:string;
    _id: number;
    description: string;
    location: string;
    price: number;
    days:DayList; 
    rating:number;

constructor(obj?:any){
        this.name = obj && obj.name || '';
        this.cuisine= obj && obj.cuisine|| '';
        this.description = obj && obj.description || '';
        this._id = obj && obj._id || 0;
        this.location= obj && obj.location|| "";
        this.price = obj && obj.price || 0;
        this.days= obj  && new DayList(obj.days) || new DayList();
        this.rating = obj && obj.rating || 0;
}
}