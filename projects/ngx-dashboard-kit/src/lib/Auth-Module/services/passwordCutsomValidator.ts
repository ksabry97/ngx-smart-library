import { AbstractControl, ValidationErrors } from '@angular/forms';

export function matchPasswordValidator(passwordControlName: string) {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.parent) {
      return null; // parent not yet ready
    }

    const password = control.parent.get(passwordControlName)?.value;
    const confirmPassword = control.value;

    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }

    return null;
  };
}
