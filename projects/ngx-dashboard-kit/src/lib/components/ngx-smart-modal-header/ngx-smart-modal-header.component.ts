import { Component, Input } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ModalService } from '../../services/modal.service';
@Component({
  selector: 'lib-ngx-smart-modal-header',
  standalone: true,
  imports: [NzIconModule],
  templateUrl: './ngx-smart-modal-header.component.html',
  styleUrl: './ngx-smart-modal-header.component.scss',
})
export class NgxSmartModalHeaderComponent {
  @Input() icon: any;
  @Input() title: any;
  @Input() description: any;

  constructor(private readonly modalServ: ModalService) {}
  close() {
    this.modalServ.isModalClosed.set(true);
  }
}
