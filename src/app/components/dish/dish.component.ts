import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Dish } from 'src/models/dish';
import { DishDetailsComponent } from '../dish-details/dish-details.component';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
@Input() data: Dish;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DishDetailsComponent,{
      data: this.data
    })
  }
}
