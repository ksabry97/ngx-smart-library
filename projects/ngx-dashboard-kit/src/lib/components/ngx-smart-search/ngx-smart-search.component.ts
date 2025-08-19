import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import {
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { debounceTime, Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'lib-ngx-smart-search',
  standalone: true,
  imports: [CommonModule, NzIconModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxSmartSearchComponent),
      multi: true,
    },
  ],
  templateUrl: './ngx-smart-search.component.html',
  styleUrl: './ngx-smart-search.component.scss',
})
export class NgxSmartSearchComponent {
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  formControl = new FormControl();
  errorMessage: string = '';
  private destroy$ = new Subject<void>();

  // ControlValueAccessor implementation
  private onChange = (value: any) => {};
  private onTouched = () => {};

  ngOnInit() {
    this.setupValueChanges();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setupValueChanges() {
    this.formControl.valueChanges
      .pipe(debounceTime(500), takeUntil(this.destroy$))
      .subscribe((value) => {
        this.onChange(value);
      });
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
  }

  onInputFocus() {
    this.formControl.markAsTouched();
  }
}
