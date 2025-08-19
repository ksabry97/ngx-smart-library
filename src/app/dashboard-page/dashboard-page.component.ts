import { Component } from '@angular/core';
import { MetricCardComponent } from '../metric-card/metric-card.component';
import { RevenueTrendsComponent } from '../revenue-trends/revenue-trends.component';
import { DailyTransactionsComponent } from '../daily-transactions/daily-transactions.component';
import { TransactionChannelsComponent } from '../transaction-channels/transaction-channels.component';
import { TopBanksComponent } from '../top-banks/top-banks.component';
import { TopMerchantsComponent } from '../top-merchants/top-merchants.component';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    MetricCardComponent,
    RevenueTrendsComponent,
    DailyTransactionsComponent,
    TransactionChannelsComponent,
    TopBanksComponent,
    TopMerchantsComponent
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],

})
export class DashboardPageComponent {}