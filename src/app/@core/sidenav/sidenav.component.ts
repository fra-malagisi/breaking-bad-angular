import {Component, Input} from '@angular/core';
import {ISidenav} from './sidenav.interface';

@Component({
  selector: 'bb-fm-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.scss']
})
export class SidenavComponent {

  @Input() menuStructure: ISidenav[] = [];

  public isOpen = false;

  toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
