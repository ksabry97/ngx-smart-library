import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ngx-smart-confirmation',
  standalone: true,
  imports: [NzButtonModule, NzPopconfirmModule, NzIconModule, CommonModule],
  templateUrl: './ngx-smart-confirmation.component.html',
  styleUrl: './ngx-smart-confirmation.component.scss',
})
export class NgxSmartConfirmationComponent {
  @Input() confirmTitle: string = '';
  @Input() icon: string = '';
  @Input() content: string = '';
  @Output() isConfirmed = new EventEmitter<any>();
  @Output() isCancelled = new EventEmitter<any>();
  confirm() {
    this.isConfirmed.emit();
  }
  cancel() {
    this.isCancelled.emit();
  }
}
