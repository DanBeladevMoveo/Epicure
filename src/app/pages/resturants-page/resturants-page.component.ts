import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Resturant } from 'src/models/resturant';

@Component({
  selector: 'app-resturants-page',
  templateUrl: './resturants-page.component.html',
  styleUrls: ['./resturants-page.component.scss']
})
export class ResturantsPageComponent implements OnInit {
resturants: Resturant[] =[];
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getResturants().subscribe(res =>{
      console.log(res);
      this.resturants = [...res.resturants];
    })
  }

}
