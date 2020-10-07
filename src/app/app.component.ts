import { Component } from '@angular/core';
import { isMobile } from 'src/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Epicure';

  isMobile() {
    return isMobile();
  }
}
