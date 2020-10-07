import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuComponent } from 'src/app/component/menu/menu.component';
import { isMobile } from 'src/utils';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  isMobileFromComponent = () => {
    return isMobile();
  }

  openDialog(){
    const dialogConfig = {
      position: {
        top: '0px',
        right: '0px'             
      },             
      height: '100%',             
      width: '100vw',             
      maxWidth: '100vw',             
      panelClass: 'menu-dialog-container'         
    };
     this.dialog.open(MenuComponent, dialogConfig);
    }
}
