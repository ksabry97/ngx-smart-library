import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'lib-ngx-smart-modal-footer',
  standalone: true,
  imports: [NzIconModule],
  templateUrl: './ngx-smart-modal-footer.component.html',
  styleUrl: './ngx-smart-modal-footer.component.scss',
})
export class NgxSmartModalFooterComponent {
  @Input() submitText!: string;
  @Output() isSubmitted = new EventEmitter();

  constructor(private readonly modalServ: ModalService) {}
  submit() {
    this.isSubmitted.emit();
  }
  cancel() {
    this.modalServ.isModalClosed.set(true);
  }
}
