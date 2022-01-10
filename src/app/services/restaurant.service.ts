import { MenuList } from './../models/manuList';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RestaurantList } from '../models/restaurantList';

const baseUrl = "http://localhost:3000/api/restaurants"

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) { }

  getAll(params?:any):Observable<RestaurantList>{
    let queryParams = {}

    if (params) {
      queryParams = {
        params: new HttpParams()
        .set('page', params.page || "")
        .set('pageSize', params.pageSize || "")
        .set('filter', params.filter && JSON.stringify(params.filter) || "")
      }
    }


    return this.http.get(baseUrl, queryParams).pipe(map((data:any)=>{
      return new RestaurantList(data);
    }))
  }
  getMenus(restId:number):Observable<MenuList>{
    return this.http.get(`${baseUrl}/${restId}/menus`).pipe(map((data:any)=>{
      return new MenuList(data)
    }))
  }
}
