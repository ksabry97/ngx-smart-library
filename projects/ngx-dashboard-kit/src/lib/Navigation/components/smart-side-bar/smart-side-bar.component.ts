import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';

interface Item {
  label: string;
  icon: string;
  route: string;
}
@Component({
  selector: 'lib-smart-side-bar',
  standalone: true,
  imports: [CommonModule, NzIconModule],
  templateUrl: './smart-side-bar.component.html',
  styleUrl: './smart-side-bar.component.scss',
})
export class SmartSideBarComponent {
  router = inject(Router);
  isFolded: boolean = false;

  @Input() menuItems: Item[] = [
    { label: 'Dashboard', icon: 'home', route: 'dashboard' },
  ];

  activeRoute = 'dashboard';

  setActive(item: Item) {
    this.router.navigateByUrl(item.route);
    this.activeRoute = item.route;
  }
}
