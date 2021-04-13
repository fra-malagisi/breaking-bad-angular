import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input/input.component';
import {FormsModule} from '@angular/forms';
import {PaginatorComponent} from './paginator/paginator.component';
import {PaginatorElementComponent} from './paginator/paginator-element/paginator-element.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [
    InputComponent,
    PaginatorComponent
  ],
  declarations: [InputComponent, PaginatorComponent, PaginatorElementComponent]
})
export class SharedModule {}
