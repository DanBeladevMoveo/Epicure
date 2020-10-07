import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Dish } from 'src/models/dish';
@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Dish
 ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
