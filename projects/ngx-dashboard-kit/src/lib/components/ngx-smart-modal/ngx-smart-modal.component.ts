import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
@Component({
  selector: 'lib-ngx-smart-modal',
  standalone: true,
  imports: [CommonModule, NzModalModule],
  templateUrl: './ngx-smart-modal.component.html',
  styleUrl: './ngx-smart-modal.component.scss',
})
export class NgxSmartModalComponent {
  @Input() isVisible: boolean = false;
  @Input() modalComponent!: any;
}
