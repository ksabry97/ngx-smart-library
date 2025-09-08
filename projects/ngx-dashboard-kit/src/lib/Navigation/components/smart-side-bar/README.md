## SmartSideBar Component

Responsive sidebar navigation component with collapsible sections and active-route highlighting.

### Features

- Collapsible sidebar
- Supports icons and nested items
- Integrates with Angular Router for active state

### Usage

```html
<lib-smart-side-bar [items]="items"></lib-smart-side-bar>
```

### Inputs

| Name | Type | Default |
|------|------|---------|
| `items` | `Array<{ label: string; icon?: string; route?: string; children?: any[] }>` | `[]` |
| `collapsed` | `boolean` | `false` |

### License

MIT


