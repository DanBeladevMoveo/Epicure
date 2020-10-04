import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-cheff',
  templateUrl: './cheff.component.html',
  styleUrls: ['./cheff.component.scss']
})
export class CheffComponent implements OnInit {
  resturants:any = []
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getCheffResturants().subscribe(res=>
      this.resturants = [...res])
  }

}
