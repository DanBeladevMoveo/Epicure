import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resturant } from 'src/models/resturant';
import AllDishes from '../mocks/all-dishes';
import CheffResturants from '../mocks/cheff-resturants';

import Dishes from '../mocks/dishes';
import Resturants from '../mocks/resturants';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public http: HttpClient) { }
  ping(){
     this.http.get<any>(`${environment.API_URL}catalog/ping`).subscribe(res=> console.log(res),
     err=>{console.log(err);
     });
  }

  getResturants(): Observable<any> {
    console.log('service get resturants');
    
    return this.http.get<any>(`${environment.API_URL}catalog/resturants?page=1&limit=3`);
    // return of(Resturants);
  }
  getDishes() {
    return of(Dishes);
  }

  getCheffOfTheWeek(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}catalog/favchef`);
  }

  getCheffResturants(chefID:string): Observable<any> {
    // return this.http.get<any>(`${environment.API_URL}catalog/chef-resturants/${chefID}`);
        return of(Resturants);

  }
  getAllDishes() {
    return of(AllDishes)
  }
}
