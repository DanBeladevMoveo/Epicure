import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss']
})
export class MainSearchComponent implements OnInit, OnDestroy {
  mediaSub:Subscription;
  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      if(result.mqAlias.includes('xs')){
        console.log('is mobile');
      }
      else{
        console.log('desktop');
        
      }
    })
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
    console.log('destroyed');
  }

}
