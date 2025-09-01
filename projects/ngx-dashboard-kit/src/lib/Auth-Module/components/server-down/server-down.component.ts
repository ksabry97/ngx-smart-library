import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'lib-server-down',
  standalone: true,
  imports: [CommonModule, NzIconModule],
  templateUrl: './server-down.component.html',
  styleUrl: './server-down.component.css',
})
export class ServerDownComponent {
  constructor(private readonly location: Location) {}

  reloadPage() {
    window.location.reload();
  }
  back() {
    this.location.back();
  }
}
