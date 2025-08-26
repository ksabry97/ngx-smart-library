import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
@Injectable({
  providedIn: 'root',
})
export class ToastMessages {
  constructor(private message: NzMessageService) {}
  createToastMsg(
    messageType: 'success' | 'error' | 'warning' | 'info' | 'loading' = 'info',
    content: string = '',
    duration: number = 0
  ) {
    this.message.create(messageType, content, { nzDuration: duration });
  }
}
