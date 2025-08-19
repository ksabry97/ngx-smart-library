import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ErrorMessages } from '../../services/error-messages.service';
export interface ValidationRule {
  type: 'required' | 'minLength' | 'maxLength' | 'pattern' | 'email' | 'custom';
  value?: any;
  message: string;
  customValidator?: (value: any) => boolean;
}
@Component({
  selector: 'lib-ngx-smart-number-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
  ],

  templateUrl: './ngx-smart-number-input.component.html',
  styleUrls: ['./ngx-smart-number-input.component.scss'],
})
export class NgxSmartNumberInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
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
  @Input() parentGroup!: FormGroup;
  @Input() controlName!: string;
  constructor(private readonly errorMessagesServ: ErrorMessages) {}
  get control() {
    return this.parentGroup.get(this.controlName) as FormControl;
  }
  get errorMessage() {
    if (this.control.invalid && this.control.touched) {
      return this.errorMessagesServ.getErrorMessages(
        this.parentGroup,
        this.controlName,
        this.label
      );
    } else return '';
  }
  clearValue() {
    this.control.reset();
  }
}
