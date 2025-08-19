import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PsTableComponent } from '../paysky-smart-library/components/ps-table';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, PsTableComponent],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent {
  paymentTrendsColumns = [
    { field: 'quarter', header: 'Quarter' },
    { field: 'digital', header: 'Digital' },
    { field: 'cards', header: 'Cards' },
    { field: 'cash', header: 'Cash' }
  ];

  paymentTrends = [
    { quarter: 'Q1 2024', digital: '78% Digital', cards: '68% Cards', cash: '22% Cash' },
    { quarter: 'Q2 2024', digital: '82% Digital', cards: '72% Cards', cash: '18% Cash' },
    { quarter: 'Q3 2024', digital: '85% Digital', cards: '75% Cards', cash: '15% Cash' },
    { quarter: 'Q4 2024', digital: '88% Digital', cards: '78% Cards', cash: '12% Cash' }
  ];

  merchantCategories = [
    { name: 'Retail', revenue: '$2.4M', merchants: 450, growth: '+15%', growthType: 'up' },
    { name: 'E-commerce', revenue: '$1.8M', merchants: 320, growth: '+28%', growthType: 'up' },
    { name: 'Hospitality', revenue: '$1.2M', merchants: 180, growthType: 'up', growth: '+5%' },
    { name: 'Healthcare', revenue: '$0.9M', merchants: 120, growth: '+12%', growthType: 'up' },
    { name: 'Education', revenue: '$0.6M', merchants: 90, growth: '+8%', growthType: 'up' }
  ];

  marketPosition = {
    leader: { name: 'Competitor A', value: '42%' },
    our: { name: 'CTMS', value: '34%' },
    opportunity: '24% Available'
  };

  customerSatisfaction = [
    { label: 'Overall Satisfaction', value: 94, color: '#22c55e' },
    { label: 'Service Reliability', value: 97, color: '#2563eb' },
    { label: 'Support Quality', value: 91, color: '#f59e42' }
  ];

  revenueForecast = {
    projected: '$9.8M',
    period: 'Q1 2025',
    conservative: '$9.2M',
    expected: '$9.8M',
    optimistic: '$10.5M'
  };
} 