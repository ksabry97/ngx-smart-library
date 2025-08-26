import { Component, Input } from '@angular/core';
import { NzSpinModule } from 'ng-zorro-antd/spin';
@Component({
  selector: 'lib-ngx-smart-spinner',
  standalone: true,
  imports: [NzSpinModule],
  templateUrl: './ngx-smart-spinner.component.html',
  styleUrl: './ngx-smart-spinner.component.scss',
})
export class NgxSmartSpinnerComponent {
  @Input() size: 'large' | 'small' | 'default' = 'default';
}
