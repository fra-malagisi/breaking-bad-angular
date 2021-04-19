import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {PageArray} from '../paginator.component';

@Component({
  selector: 'bb-fm-paginator-element',
  templateUrl: 'paginator-element.component.html',
  styleUrls: ['paginator-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorElementComponent {

  @Input() pageNumber!: PageArray;
  @Input() isActive = false;
  @Output() onClick = new EventEmitter<PageArray>();

  isNotDotsOrActive(): boolean {
    return !this.isDots() && !this.isActive;
  }

  isDots(): boolean {
    return this.pageNumber === '...';
  }
}
