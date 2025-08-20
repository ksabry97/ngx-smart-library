import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ErrorMessages } from '../../services/error-messages.service';
import { NzIconModule } from 'ng-zorro-antd/icon';
export interface ValidationRule {
  type: 'required' | 'minLength' | 'maxLength' | 'pattern' | 'email' | 'custom';
  value?: any;
  message: string;
  customValidator?: (value: any) => boolean;
}
interface SmartOption {
  text: string;
  value: string;
}
@Component({
  selector: 'lib-ngx-smart-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NzSelectModule, NzIconModule],
  templateUrl: './ngx-smart-select.component.html',
  styleUrl: './ngx-smart-select.component.scss',
})
export class NgxSmartSelectComponent {
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
  @Input() options: SmartOption[] = [];
  @Input() mode: 'multiple' | 'tags' | 'default' = 'default';
  @Input() allowClear: boolean = false;
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
}
