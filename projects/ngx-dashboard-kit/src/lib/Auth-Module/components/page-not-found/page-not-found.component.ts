import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'lib-page-not-found',
  standalone: true,
  imports: [CommonModule, NzIconModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css',
})
export class PageNotFoundComponent {
  constructor(
    private readonly router: Router,
    private readonly location: Location
  ) {}

  goHome() {
    this.router.navigateByUrl('/');
  }
  back() {
    this.location.back();
  }
}
