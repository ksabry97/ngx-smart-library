# NgxSmartTable Component

A standalone, fully dynamic table component built with `ng-zorro-antd/table` that supports customizable columns, actions, pagination, sorting, and loading states.

## Features

- ✅ **ng-zorro Integration** - Built on top of `ng-zorro-antd/table`
- ✅ **Dynamic Columns** - Configurable columns with templates
- ✅ **Custom Actions** - Action buttons for each row
- ✅ **Pagination** - Built-in pagination with configurable page sizes
- ✅ **Sorting** - Column sorting with visual indicators
- ✅ **Loading States** - Loading spinners and skeleton states
- ✅ **Responsive Design** - Works on all screen sizes
- ✅ **TypeScript Support** - Fully typed with generics
- ✅ **Accessibility** - Proper ARIA labels and keyboard navigation

## Installation

The component is part of the `ngx-dashboard-kit` library and requires ng-zorro to be installed:

```bash
npm install ng-zorro-antd @ant-design/icons-angular
```

## Usage

### Basic Usage

```typescript
import { NgxSmartTableComponent, TableColumn, TableAction } from 'ngx-dashboard-kit';

@Component({
  imports: [NgxSmartTableComponent],
  // ... other component configuration
})
export class MyComponent {
  columns: TableColumn[] = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name', sortable: true },
    { field: 'email', header: 'Email' }
  ];

  data = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];

  actions: TableAction[] = [
    { label: 'Edit', icon: 'edit', severity: 'primary' },
    { label: 'Delete', icon: 'delete', severity: 'danger' }
  ];

  onActionClick(event: { action: TableAction; rowData: any; rowIndex: number }) {
    console.log('Action clicked:', event.action.label, 'on row:', event.rowData);
  }
}
```

```html
<lib-ngx-smart-table
  [columns]="columns"
  [data]="data"
  [actions]="actions"
  (onActionClick)="onActionClick($event)"
></lib-ngx-smart-table>
```

### With Custom Templates

```typescript
columns: TableColumn[] = [
  { field: 'id', header: 'ID' },
  { field: 'name', header: 'Name' },
  { field: 'status', header: 'Status', template: 'boolean' },
  { field: 'amount', header: 'Amount', template: 'currency' },
  { field: 'date', header: 'Date', template: 'date' }
];
```

### With Pagination

```typescript
@Component({
  // ... component configuration
})
export class MyComponent {
  // ... other properties

  onLazyLoad(event: any) {
    // Handle pagination changes
    console.log('Page changed:', event);
  }
}
```

```html
<lib-ngx-smart-table
  [columns]="columns"
  [data]="data"
  [paginator]="true"
  [rows]="10"
  [rowsPerPageOptions]="[5, 10, 20, 50]"
  (onLazyLoad)="onLazyLoad($event)"
></lib-ngx-smart-table>
```

## API Reference

### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `columns` | `TableColumn[]` | `[]` | Array of column definitions |
| `data` | `T[]` | `[]` | Array of data to display |
| `loading` | `boolean` | `false` | Whether to show loading state |
| `paginator` | `boolean` | `true` | Whether to show pagination |
| `rows` | `number` | `10` | Number of rows per page |
| `rowsPerPageOptions` | `number[]` | `[5, 10, 20]` | Available page size options |
| `actions` | `TableAction[]` | `[]` | Array of action buttons |

### Outputs

| Event | Type | Description |
|-------|------|-------------|
| `onRowSelect` | `EventEmitter<any>` | Emitted when a row is selected |
| `onRowUnselect` | `EventEmitter<any>` | Emitted when a row is unselected |
| `onRowClick` | `EventEmitter<any>` | Emitted when a row is clicked |
| `onLazyLoad` | `EventEmitter<any>` | Emitted when pagination changes |
| `onActionClick` | `EventEmitter<{ action: TableAction; rowData: T; rowIndex: number }>` | Emitted when an action is clicked |

## Interfaces

### TableColumn

```typescript
export interface TableColumn {
  field: string;           // Property name from data object
  header: string;          // Display text for column header
  sortable?: boolean;      // Whether column is sortable
  filter?: boolean;        // Whether column has filtering
  width?: string;          // CSS width value
  template?: string;       // Template type for special formatting
}
```

### TableAction

```typescript
export interface TableAction {
  label: string;                                    // Display text for action button
  icon?: string;                                    // Icon name for the button
  severity?: 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger';
  disabled?: boolean;                               // Whether button is disabled
}
```

## Column Templates

The component supports several built-in templates for special data formatting:

### Boolean Template

```typescript
{ field: 'status', header: 'Status', template: 'boolean' }
```

Displays "Active" or "Inactive" with appropriate styling.

### Currency Template

```typescript
{ field: 'amount', header: 'Amount', template: 'currency' }
```

Formats numbers as currency using Angular's currency pipe.

### Date Template

```typescript
{ field: 'createdAt', header: 'Created', template: 'date' }
```

Formats dates using Angular's date pipe.

### Number Template

```typescript
{ field: 'quantity', header: 'Quantity', template: 'number' }
```

Formats numbers using Angular's number pipe.

## Styling

The component uses ng-zorro's default styling with custom enhancements:

```scss
.ngx-smart-table-container {
  .action-buttons {
    display: flex;
    gap: 0.5rem;
    
    .action-btn {
      padding: 0.25rem 0.5rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.875rem;
      
      &.primary { background-color: #1890ff; color: white; }
      &.secondary { background-color: #6c757d; color: white; }
      &.success { background-color: #52c41a; color: white; }
      &.info { background-color: #13c2c2; color: white; }
      &.warn { background-color: #faad14; color: white; }
      &.danger { background-color: #ff4d4f; color: white; }
      
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }

  .status-badge {
    padding: 0.25rem 0.5rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
    
    &.active {
      background-color: #f6ffed;
      color: #52c41a;
      border: 1px solid #b7eb8f;
    }
    
    &.inactive {
      background-color: #fff2f0;
      color: #ff4d4f;
      border: 1px solid #ffccc7;
    }
  }

  .empty-state {
    text-align: center;
    padding: 2rem;
    color: #8c8c8c;
    
    i {
      margin-bottom: 1rem;
    }
  }
}
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- ng-zorro 18+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License. 