## NgxSmartModalFooter Component

Footer utility for `NgxSmartModal` providing standard Cancel/OK buttons with events.

### Usage

```html
<lib-ngx-smart-modal-footer (cancel)="onCancel()" (confirm)="onConfirm()"></lib-ngx-smart-modal-footer>
```

### Inputs

| Name | Type | Default |
|------|------|---------|
| `cancelText` | `string` | `'Cancel'` |
| `okText` | `string` | `'OK'` |
| `okType` | `'primary'|'default'|'dashed'|'link'` | `'primary'` |

### Events

| Name | Payload |
|------|---------|
| `cancel` | `void` |
| `confirm` | `void` |

### License

MIT


