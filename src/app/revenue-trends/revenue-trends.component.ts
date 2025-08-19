import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-revenue-trends',
  standalone: true,
  imports: [CommonModule, NzIconModule],
  templateUrl: './revenue-trends.component.html',
  styleUrls: ['./revenue-trends.component.scss']
})
export class RevenueTrendsComponent {
  revenueTrendsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [32000, 41000, 37000, 42000, 50000, 46000],
        borderColor: '#a78bfa',
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
  revenueTrendsOptions = {
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#888' } },
      y: { grid: { color: '#eee' }, ticks: { color: '#888' } }
    }
  };
} 