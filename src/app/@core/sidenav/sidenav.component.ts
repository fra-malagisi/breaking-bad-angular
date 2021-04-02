import {Component, Input} from '@angular/core';
import {ISidenav} from './sidenav.interface';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'bb-fm-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.scss']
})
export class SidenavComponent {

  @Input() menuStructure: ISidenav[] = [];
  @Input() isOpen = false;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
