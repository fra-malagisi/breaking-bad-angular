import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input/input.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [
    InputComponent
  ],
  declarations: [InputComponent]
})
export class SharedModule {}
