import {Component, Output, EventEmitter} from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'bb-fm-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {
  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();
  faBars = faBars;
}
