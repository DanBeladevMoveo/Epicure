import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import Dishes from '../mocks/dishes';
import Resturants from '../mocks/resturants';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }


  getResturants() {
    return of(Resturants)
  }
  getDishes() {
    return of(Dishes);
  }
}
