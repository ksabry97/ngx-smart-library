## NgxSmartSearch Component

Lightweight debounced search input implementing ControlValueAccessor.

### Features

- Debounced value changes (~500ms)
- Two-way binding compatible
- Simple API and CVA support

### Usage

```html
<lib-ngx-smart-search placeholder="Search..." [(ngModel)]="query"></lib-ngx-smart-search>
```

### Inputs

| Name | Type | Default |
|------|------|---------|
| `placeholder` | `string` | `''` |
| `disabled` | `boolean` | `false` |

### License

MIT


