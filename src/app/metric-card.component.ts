import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric-card',
  standalone: true,
  templateUrl: './metric-card.component.html',
  styleUrls: ['./metric-card.component.scss']
})
export class MetricCardComponent {
  @Input() title = '';
  @Input() value = '';
  @Input() icon = '';
  @Input() trend = '';
  @Input() trendColor = 'green';
  @Input() trendLabel = '';
} 