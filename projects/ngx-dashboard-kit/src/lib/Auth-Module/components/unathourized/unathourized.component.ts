import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'lib-unathourized',
  standalone: true,
  imports: [CommonModule, NzIconModule],
  templateUrl: './unathourized.component.html',
  styleUrl: './unathourized.component.scss',
})
export class UnathourizedComponent {
  constructor(
    private readonly router: Router,
    private readonly location: Location
  ) {}

  routeLogin() {
    this.router.navigateByUrl('/login');
  }
  back() {
    this.location.back();
  }
}
