import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'lib-smart-side-bar',
  standalone: true,
  imports: [CommonModule, NzIconModule],
  templateUrl: './smart-side-bar.component.html',
  styleUrl: './smart-side-bar.component.scss',
})
export class SmartSideBarComponent {}
