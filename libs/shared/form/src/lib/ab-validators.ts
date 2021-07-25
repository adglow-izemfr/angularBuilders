/* eslint-disable @typescript-eslint/no-explicit-any */
import { AbstractControl, FormGroup } from "@angular/forms";
type functionValidator = (control: AbstractControl) => any | null;
type functionFormValidator = (formGroup: FormGroup) => any | null;

export class AbValidators {
  static realisticDate(control: AbstractControl): any | null {
    const value = new Date(control.value);
    const min = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
    const max = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
    if (value < min || value > max) {
      return {'realistic-date': 'One year before or after today'};
    }
    return null;
  }
  static includes(expected: string): functionValidator {
    return function(control: AbstractControl): any | null {
      const value = control.value as string;
      const cleanExpected = expected.trim().toLocaleLowerCase();
      if (value && value.toLocaleLowerCase().includes(cleanExpected)) {
        return null;
      } else {
        return { includes: expected + ' not found'};
      }
    }
  }

  static confirmed(controlName: string, matchingControlName: string): functionFormValidator {
    return function(formGroup: FormGroup) {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
        return { confirmedValidator: true };
      } else {
        return null;
      }
    }
  }
}
