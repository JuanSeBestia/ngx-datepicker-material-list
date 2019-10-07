import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Moment } from 'moment';
import moment from 'moment';

type IValue = Moment | Date | string;
@Component({
  selector: 'npx-datepicker-material-list',
  templateUrl: './datepicker-material-list.component.html',
  styleUrls: ['./datepicker-material-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerMaterialListComponent),
      multi: true
    }
  ]
})
export class DatepickerMaterialListComponent implements ControlValueAccessor {
  values: Moment[];

  // Allow the input to be disabled, and when it is make it somewhat transparent.
  @Input() disabled = false;
  @Input() format;

  get listValues() {
    return this.values.map(item => item.format(this.format));
  }

  // Function to call when the rating changes.
  onChange = (values: Moment[]) => {};

  // Function to call when the input is touched (when a star is clicked).
  onTouched = () => {};

  // Allows Angular to update the model (rating).
  // Update the model and changes needed for the view here.
  writeValue(values: IValue[]): void {
    this.values = values.map(item => moment(item));
    this.onChange(this.values);
  }

  // Allows Angular to register a function to call when the model (rating) changes.
  // Save the function as a property to call later here.
  registerOnChange(fn: (rating: Moment[]) => void): void {
    this.onChange = fn;
  }

  // Allows Angular to register a function to call when the input has been touched.
  // Save the function as a property to call later here.
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
