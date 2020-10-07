import { Component, OnInit } from '@angular/core';
import { isMobile } from 'src/utils';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isMobile() {
    return isMobile()
  }
}
