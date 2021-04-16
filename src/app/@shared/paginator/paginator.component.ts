import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {noop} from 'rxjs';
import {tap} from 'rxjs/operators';

type AddOperation = 'previous' | 'next';
export type PageArray = string | number;


@Component({
  selector: 'bb-fm-paginator',
  templateUrl: 'paginator.component.html',
  styleUrls: ['paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent implements OnInit {
  @Input() totalItems = 1;
  @Input() maxItemPerPage!: number;
  @Input() currentPage = 1;
  @Output() onPageChange = new EventEmitter<number>();
  public totalPages!: number;
  public previousPages: PageArray[] = [];
  public nextPages: PageArray[] = [];
  private maxShownPages = 3;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset]).pipe(
     tap(({matches}) => {
       this.maxShownPages = matches ? 1 : 3;
       this.setPages();
       this.cdRef.detectChanges();
     })
    ).subscribe(console.log);
    this.setTotalPages();
    this.setPages();
  }

  setPages(): void {
    this.setEmptyPages();
    this.setPreviousPages();
    this.setNextPages();
  }

  private setTotalPages(): void {
    this.totalPages =  Math.ceil(this.totalItems / this.maxItemPerPage);
  }

  handlePageClick(page: PageArray): void {
    this.currentPage = Number.parseInt(page as string, 10);
    this.onPageChange.emit(this.currentPage);
    this.setPages();
  }

  setEmptyPages(): void {
    this.nextPages = [];
    this.previousPages = [];
  }

  private setNextPages(): void {
    this.nextPages = this.addPage('next', this.nextPages);
  }

  private setPreviousPages(): void {
    this.previousPages = this.addPage('previous', this.previousPages);
  }

  private addPage(type: AddOperation, current: PageArray[]): PageArray[] {
    const pageUpdated = type === 'next' ?
      [...current, this.getLastPage(type, current) + 1] : [this.getLastPage(type, current) - 1, ...current];
    return this.isPagesFull(type, current) ? this.addInitialAndEnd(type, current) : this.addPage(type, pageUpdated);
  }

  isPagesFull(type: AddOperation, current: PageArray[]): boolean {
    const currentPosition = this.getCurrentPosition(type, current);
    return current.length === this.maxShownPages || (type === 'next' ? currentPosition >= this.totalPages : currentPosition <= 1);
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
