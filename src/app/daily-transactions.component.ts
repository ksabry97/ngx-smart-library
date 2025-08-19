import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-daily-transactions',
  standalone: true,
  imports: [CommonModule, NzIconModule],
  templateUrl: './daily-transactions.component.html',
  styleUrls: ['./daily-transactions.component.scss']
})
export class DailyTransactionsComponent {
  dailyTransactionsData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Transactions',
        data: [12000, 15000, 14000, 18000, 22000, 16000, 13000],
        borderColor: '#22c55e',
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, 'rgba(167, 139, 250, 0.3)');
          gradient.addColorStop(1, 'rgba(167, 139, 250, 0.05)');
          return gradient;
        },
        fill: true,
        tension: 0.4,
        pointRadius: 0
      }
    ]
  };
  dailyTransactionsOptions = {
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#888' } },
      y: { grid: { color: '#eee' }, ticks: { color: '#888' } }
    }
  };
} 