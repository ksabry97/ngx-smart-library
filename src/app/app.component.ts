import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { HeaderComponent } from './header.component';
import { RevenueTrendsComponent } from './revenue-trends.component';
import { DailyTransactionsComponent } from './daily-transactions.component';
import { MetricCardComponent } from './metric-card/metric-card.component';
import { SmartSideBarComponent } from 'ngx-dashboard-kit';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SmartSideBarComponent,
    NzAvatarModule,
    NzBadgeModule,
    HeaderComponent,
    RevenueTrendsComponent,
    DailyTransactionsComponent,
    MetricCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showLayout = true;
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // Hide layout for /login and any child routes
        this.showLayout = !/^\/login($|\/)/.test(event.urlAfterRedirects);
      });
  }
}
