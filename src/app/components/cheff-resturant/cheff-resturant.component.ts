import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cheff-resturant',
  templateUrl: './cheff-resturant.component.html',
  styleUrls: ['./cheff-resturant.component.scss']
})
export class CheffResturantComponent implements OnInit {
@Input() data: any
  constructor() { }

  ngOnInit(): void {
  }

}
