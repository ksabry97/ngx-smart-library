import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-transaction-channels',
  standalone: true,
  imports: [CommonModule, NzIconModule],
  templateUrl: './transaction-channels.component.html',
  styleUrls: ['./transaction-channels.component.scss']
})
export class TransactionChannelsComponent {
  chartData = {
    labels: ['POS', 'Merchant App', 'Cash'],
    datasets: [
      {
        label: 'Volume',
        data: [35000, 27000, 18000, 12000],
        backgroundColor: ['#a78bfa', '#22c55e', '#fbbf24', '#6b7280']
      }
    ]
  };
  chartOptions = {
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#888' } },
      y: { grid: { color: '#eee' }, ticks: { color: '#888' } }
    }
  };
} 