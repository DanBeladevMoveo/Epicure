import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Dish } from 'src/models/dish';

@Component({
  selector: 'app-resturant-page',
  templateUrl: './resturant-page.component.html',
  styleUrls: ['./resturant-page.component.scss']
})
export class ResturantPageComponent implements OnInit {
  dishes: Dish[] =[];
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getAllDishes().subscribe(dishes => 
      this.dishes = [...dishes]);
  }

}
