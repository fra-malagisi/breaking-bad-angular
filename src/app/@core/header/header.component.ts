import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'bb-fm-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {
  @Output() handleBurgerClicked: EventEmitter<void> = new EventEmitter<void>();

}
