import {Component, Input, OnInit} from '@angular/core';

const MAX_ITEMS_PAGE = 4;
const MAX_SHOWN_PAGES = 3;
type AddOperation = 'previous' | 'next';
export type PageArray = string | number;

@Component({
  selector: 'bb-fm-paginator',
  templateUrl: 'paginator.component.html',
  styleUrls: ['paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() totalItems!: number;
  public totalPages!: number;
  public currentPage = 1;
  public previousPages: PageArray[] = [];
  public nextPages: PageArray[] = [2, 3, 4];

  ngOnInit(): void {
    this.setTotalPages();
  }

  handlePageClick(page: PageArray): void {
    this.currentPage = page as number;
    this.setPreviousPages();
    this.setNextPages();
  }

  private setTotalPages(): void {
    this.totalPages =  Math.ceil(this.totalItems / MAX_ITEMS_PAGE);
  }

  private setNextPages(): void {
    this.nextPages = [];
    this.nextPages = this.addPage('next', this.nextPages);
  }

  private setPreviousPages(): void {
    this.previousPages = [];
    this.previousPages = this.addPage('previous', this.previousPages);
  }

  private addPage(type: AddOperation, current: PageArray[]): PageArray[] {
    const pageUpdated = type === 'next' ?
      [...current, this.getLastPage(type, current) + 1] : [this.getLastPage(type, current) - 1, ...current];
    return this.isPagesFull(type, current) ? this.addInitialAndEnd(type, current) : this.addPage(type, pageUpdated);
  }

  isPagesFull(type: AddOperation, current: PageArray[]): boolean {
    const currentPosition = this.getCurrentPosition(type, current);
    return current.length === MAX_SHOWN_PAGES || (type === 'next' ? currentPosition >= this.totalPages : currentPosition <= 1);
  }

  getCurrentPosition(type: AddOperation, current: PageArray[]): number {
    return type === 'next' ? this.currentPage + current.length : this.currentPage - current.length;
  }

  getLastPage(type: AddOperation, current: PageArray[]): number {
    return (type === 'previous' ?
      current[0] || this.currentPage :
      current[current.length - 1] || this.currentPage) as number;
  }

  addInitialAndEnd(type: AddOperation, current: PageArray[]): PageArray[] {
    if (this.isStartOrEnd(type, current)) {
      return current;
    }
    return type === 'next' ? [...current, '...', this.totalPages] : [1, '...', ...current];
  }

  isStartOrEnd(type: AddOperation, current: PageArray[]): boolean {
    return !current[0] || (type === 'next' && current[current.length - 1] === this.totalPages) || (type === 'previous' && current[0] === 1);
  }
}
