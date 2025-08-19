import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-top-banks',
  standalone: true,
  templateUrl: './top-banks.component.html',
  styleUrls: ['./top-banks.component.scss'],
  imports: [CommonModule, NzTableModule]
})
export class TopBanksComponent {
  banks = [
    { name: 'WE Bank', txns: '24.5K', value: '₹12.5M', trend: '+15.2%' },
    { name: 'ADCB', txns: '22.1K', value: '₹10.8M', trend: '+12.8%' },
    { name: 'VodaBank', txns: '18.3K', value: '₹8.9M', trend: '+18.5%' },
    { name: 'LightBox', txns: '15.8K', value: '₹7.2M', trend: '+9.4%' }
  ];
} 