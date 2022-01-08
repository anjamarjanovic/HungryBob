export class Day{
    opens:number;
    closes:number;
    constructor(obj?:any){
        this.opens= obj && obj.opens|| '';
        this.closes= obj && obj.closes|| '';
    } 
}