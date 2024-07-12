import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// Mobile number must be 10 digits
export function mobileNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const valid = /^[0-9]{10}$/.test(value);
    return !valid ? { mobileNumber: true } : null;
  };
}
export function strongPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumeric = /[0-9]/.test(value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const valid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecial;
    return !valid ? { strongPassword: true } : null;
  };
}
