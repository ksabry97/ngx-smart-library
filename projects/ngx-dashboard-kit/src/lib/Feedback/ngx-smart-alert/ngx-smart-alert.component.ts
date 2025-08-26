import { Component, Input } from '@angular/core';
import { NzAlertModule } from 'ng-zorro-antd/alert';
@Component({
  selector: 'lib-ngx-smart-alert',
  standalone: true,
  imports: [NzAlertModule],
  templateUrl: './ngx-smart-alert.component.html',
  styleUrl: './ngx-smart-alert.component.scss',
})
export class NgxSmartAlertComponent {
  @Input() alertType: 'success' | 'info' | 'warning' | 'error' = 'info';
  @Input() content: string = '';
  @Input() description: string = '';
  @Input() showIcon: boolean = false;
}
