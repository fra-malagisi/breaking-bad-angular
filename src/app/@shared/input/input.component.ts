import {ChangeDetectionStrategy, Component, forwardRef, Input, Renderer2} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'bb-fm-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true,
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements ControlValueAccessor {

  @Input() id!: string;
  @Input() label!: string;
  value = '';
  isOnFocus = false;

  onChange: any = () => {};
  onTouch: any = () => {};

  constructor(private renderer: Renderer2) {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  writeValue(value: string): void {
    this.value = value;
  }

  onFocus(): void {
    this.isOnFocus = true;
  }

  onBlur(): void {
    this.isOnFocus = false;
  }
}
