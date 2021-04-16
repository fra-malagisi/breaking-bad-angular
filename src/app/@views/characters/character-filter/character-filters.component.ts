import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'bb-fm-caracter-filter',
  templateUrl: 'character-filters.component.html',
  styleUrls: ['character-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterFiltersComponent implements OnInit {

  public filtersForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.filtersForm.valueChanges.subscribe(console.log);
  }

  createForm(): void {
    this.filtersForm = this.formBuilder.group({
      name: []
    });
  }
}
