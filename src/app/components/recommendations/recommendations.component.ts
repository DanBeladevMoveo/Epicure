import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {
  resturants: any = []
  dishes: any = []
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    console.log('on init recommandation');
    this.appService.getResturants().subscribe(res => {      
      console.log('home page? ',res);
      this.resturants = [...res.resturants];
    });
    this.appService.getDishes().subscribe(res =>{
      this.dishes = [...res];
    });
  }

}
