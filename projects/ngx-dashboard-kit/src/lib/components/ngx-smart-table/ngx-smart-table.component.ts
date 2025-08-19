import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzIconModule } from 'ng-zorro-antd/icon';

export interface TableColumn {
  field: string;
  header: string;
  sortable?: boolean;
  filter?: boolean;
  width?: string;
  template?: string;
}

export interface TableAction {
  label: string;
  icon?: string;
  severity?: 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger';
  disabled?: boolean;
}

@Component({
  selector: 'lib-ngx-smart-table',
  standalone: true,
  imports: [CommonModule, NzTableModule, NzSpinModule, NzIconModule],
  templateUrl: './ngx-smart-table.component.html',
  styleUrls: ['./ngx-smart-table.component.scss']
})
export class NgxSmartTableComponent<T = any> {
  @Input() columns: TableColumn[] = [];
  @Input() data: T[] = [];
  @Input() loading: boolean = false;
  @Input() paginator: boolean = true;
  @Input() rows: number = 10;
  @Input() rowsPerPageOptions: number[] = [5, 10, 20];
  @Input() actions: TableAction[] = [];

  @Output() onRowSelect = new EventEmitter<any>();
  @Output() onRowUnselect = new EventEmitter<any>();
  @Output() onRowClick = new EventEmitter<any>();
  @Output() onLazyLoad = new EventEmitter<any>();
  @Output() onActionClick = new EventEmitter<{ action: TableAction; rowData: T; rowIndex: number }>();
} 