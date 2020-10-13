import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/services/app.service';
import { IChef } from 'src/models/chef';




@Component({
  selector: 'app-cheff',
  templateUrl: './cheff.component.html',
  styleUrls: ['./cheff.component.scss']
})
export class CheffComponent implements OnInit {
  resturants:any = [];
  chef: IChef = {
    id:'',
    name:'',
    about: '',
    image: ''
  };
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getCheffOfTheWeek().subscribe(res => {
      this.chef = {
        id: res._id,
        ...res};
      console.log(this.chef)
    });

    this.appService.getCheffResturants(this.chef.id).subscribe(res=>
      this.resturants = [...res])
  }

}
