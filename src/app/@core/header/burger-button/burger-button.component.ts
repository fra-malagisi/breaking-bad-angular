import {Component, EventEmitter, Output} from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'bb-fm-burger-button',
  templateUrl: 'burger-button.component.html',
  styleUrls: ['burger-button.component.scss']
})
export class BurgerButtonComponent {
  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();
  public faBars = faBars;
}
