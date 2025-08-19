import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  router = inject(Router)
  menuItems = [
    { label: 'Dashboard', icon: 'pi pi-th-large', route: 'dashboard' },
    { label: 'Analytics', icon: 'pi pi-chart-bar', route: 'analytics' },
    { label: 'Bank Management', icon: 'pi pi-building', route: 'banks' },
    {
      label: 'Hosts & Routes', icon: 'pi pi-share-alt', route: 'routes', children: [
        { label: 'Routes', icon: 'pi pi-directions', route: 'routes' },
        { label: 'Hosts', icon: 'pi pi-server', route: 'hosts' }
      ]
    },
    { label: 'Merchant Management', icon: 'pi pi-users', route: 'merchants' },
    { label: 'Terminal Management', icon: 'pi pi-tablet', route: 'terminals' },
    { label: 'Inventory Management', icon: 'pi pi-box', route: 'inventory' },
    { label: 'Transaction', icon: 'pi pi-credit-card', route: 'transactions' }
  ];

  activeRoute = '';
  expandedItems = new Set<string>();

  constructor() {
    this.setActiveRouteFromUrl(this.router.url);
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.setActiveRouteFromUrl(event.urlAfterRedirects || event.url);
      });
  }

  setActiveRouteFromUrl(url: string) {
    // Remove leading slash and query params/fragments
    const cleanUrl = url.replace(/^\//, '').split(/[?#]/)[0];
    // Match only the first segment for top-level routes
    this.activeRoute = cleanUrl.split('/')[0] || 'dashboard';
  }

  setActive(route: string) {
    this.activeRoute = route;
    this.router.navigate([route]);
  }

  toggleExpand(route: string) {
    console.log('toggleExpand', route, this.expandedItems);

    if (this.expandedItems.has(route)) {
      this.expandedItems.delete(route);
    } else {
      this.expandedItems.add(route);
    }
  }
}