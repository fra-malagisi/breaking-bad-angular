import { Component } from '@angular/core';
import {SidenavMenu} from './@costants/sidenav.const';

@Component({
  selector: 'bb-fm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidenavMenu = SidenavMenu;
}
