import { Component, Input, forwardRef, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Subject, takeUntil } from 'rxjs';

export interface ValidationRule {
  type: 'required' | 'minLength' | 'maxLength' | 'pattern' | 'email' | 'custom';
  value?: any;
  message: string;
  customValidator?: (value: any) => boolean;
}

@Component({
  selector: 'lib-ngx-smart-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule
  ],
  templateUrl: './ngx-smart-input.component.html',
  styleUrls: ['./ngx-smart-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxSmartInputComponent),
      multi: true
    }
  ]
})
export class NgxSmartInputComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() maxLength?: number;
  @Input() minLength?: number;
  @Input() pattern?: string;
  @Input() validationRules: ValidationRule[] = [];
  @Input() showClear: boolean = false;
  @Input() showIcon: boolean = false;
  @Input() icon: string = '';
  @Input() suffix: string = '';
  @Input() prefix: string = '';

  formControl = new FormControl();
  errorMessage: string = '';
  private destroy$ = new Subject<void>();

  // ControlValueAccessor implementation
  private onChange = (value: any) => {};
  private onTouched = () => {};

  ngOnInit() {
    this.setupValidation();
    this.setupValueChanges();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setupValidation() {
    const validators = [];

    // Add built-in validators based on inputs
    if (this.required) {
      validators.push(Validators.required);
    }

    if (this.minLength) {
      validators.push(Validators.minLength(this.minLength));
    }

    if (this.maxLength) {
      validators.push(Validators.maxLength(this.maxLength));
    }

    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }

    if (this.type === 'email') {
      validators.push(Validators.email);
    }

    // Add custom validation rules
    if (this.validationRules.length > 0) {
      const customValidators = this.validationRules
        .filter(rule => rule.type === 'custom' && rule.customValidator)
        .map(rule => {
          return (control: any) => {
            const isValid = rule.customValidator!(control.value);
            return isValid ? null : { custom: { message: rule.message } };
          };
        });
      validators.push(...customValidators);
    }

    this.formControl.setValidators(validators);
  }

  private setupValueChanges() {
    this.formControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.onChange(value);
        this.updateErrorMessage();
      });

    this.formControl.statusChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.updateErrorMessage();
      });
  }

  private updateErrorMessage() {
    if (this.formControl.invalid && this.formControl.touched) {
      const errors = this.formControl.errors;
      if (!errors) return;

      // Check custom validation rules first
      for (const rule of this.validationRules) {
        if (errors[rule.type] || (rule.type === 'custom' && errors['custom'])) {
          this.errorMessage = rule.message;
          return;
        }
      }

      // Check built-in validators
      if (errors['required']) {
        this.errorMessage = `${this.label} is required`;
      } else if (errors['email']) {
        this.errorMessage = 'Please enter a valid email address';
      } else if (errors['minlength']) {
        this.errorMessage = `${this.label} must be at least ${errors['minlength'].requiredLength} characters`;
      } else if (errors['maxlength']) {
        this.errorMessage = `${this.label} must not exceed ${errors['maxlength'].requiredLength} characters`;
      } else if (errors['pattern']) {
        this.errorMessage = `${this.label} format is invalid`;
      } else {
        this.errorMessage = `${this.label} is invalid`;
      }
    } else {
      this.errorMessage = '';
    }
  }

  // ControlValueAccessor methods
  writeValue(value: any): void {
    this.formControl.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.formControl.disable();
    } else {
      this.formControl.enable();
    }
  }

  onInputBlur() {
    this.onTouched();
    this.updateErrorMessage();
  }

  onInputFocus() {
    this.formControl.markAsTouched();
  }

  clearValue() {
    this.formControl.setValue('');
  }
} 