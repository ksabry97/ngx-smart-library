import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-merchants',
  standalone: true,
  templateUrl: './top-merchants.component.html',
  styleUrls: ['./top-merchants.component.scss'],
  imports:[CommonModule]
})
export class TopMerchantsComponent {
  merchants = [
    { name: 'TechCorp Solutions', bank: 'WE Bank', txns: '5.2K', value: '₹2.1M' },
    { name: 'Global Retail Inc', bank: 'ADCB', txns: '4.8K', value: '₹1.8M' },
    { name: 'Digital Commerce Ltd', bank: 'VodaBank', txns: '4.1K', value: '₹1.5M' },
    { name: 'Smart Pay Systems', bank: 'LightBox', txns: '3.6K', value: '₹1.2M' }
  ];
} 