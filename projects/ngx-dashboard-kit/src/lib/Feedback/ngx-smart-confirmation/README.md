## NgxSmartConfirmation Component

Simple confirmation dialog component for yes/no actions.

### Features

- Configurable title and message
- Confirm/Cancel buttons with outputs

### Usage

```html
<lib-ngx-smart-confirmation
  title="Delete item"
  message="Are you sure?"
  (confirm)="onConfirm()"
  (cancel)="onCancel()">
</lib-ngx-smart-confirmation>
```

### Inputs

| Name | Type | Default |
|------|------|---------|
| `title` | `string` | `''` |
| `message` | `string` | `''` |

### Events

| Name | Payload |
|------|---------|
| `confirm` | `void` |
| `cancel` | `void` |

### License

MIT


