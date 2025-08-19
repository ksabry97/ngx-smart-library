import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface TableAction {
  label: string;
  icon: string;
  action: (row: any) => void;
  disabled?: boolean;
  class?: string;
}

@Component({
  selector: 'ps-table',
  standalone: true,
  templateUrl: './ps-table.component.html',
  styleUrls: ['./ps-table.component.scss'],
  imports:[CommonModule]
})
export class PsTableComponent {
  @Input() columns: { field: string, header: string }[] = [];
  @Input() data: any[] = [];
  @Input() actions: TableAction[] = [];
} 