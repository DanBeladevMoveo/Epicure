import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import CheffResturants from '../mocks/cheff-resturants';

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

  getCheffResturants() {
    return of(CheffResturants)
  }
}
