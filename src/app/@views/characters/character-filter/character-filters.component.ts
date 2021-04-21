import {ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime, takeUntil, tap} from 'rxjs/operators';
import {ICharacterFilter} from '../character.interface';
import {noop, Subject} from 'rxjs';

@Component({
  selector: 'bb-fm-caracter-filter',
  templateUrl: 'character-filters.component.html',
  styleUrls: ['character-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterFiltersComponent implements OnInit, OnDestroy {

  public filtersForm!: FormGroup;
  @Output() onFiltersEdited = new EventEmitter<ICharacterFilter>();
  private _onDestroy$ = new Subject();

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();

    this.filtersForm.valueChanges
      .pipe(
        takeUntil(this._onDestroy$),
        debounceTime(1500),
        tap((filters: ICharacterFilter) => this.onFiltersEdited.emit(filters)),
      ).subscribe(noop);
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
  }

  createForm(): void {
    this.filtersForm = this.formBuilder.group({
      name: []
    });
  }
}
