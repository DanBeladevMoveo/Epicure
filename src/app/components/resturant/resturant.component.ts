import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.scss']
})
export class ResturantComponent implements OnInit {
  @Input() data: any
  constructor() { }

  ngOnInit(): void {
  }

}
