## NgxSmartModal Component

A configurable modal wrapper on top of `ng-zorro-antd/modal` with header/footer content-projection helpers.

### Features

- Easy API over `nz-modal`
- Works with `NgxSmartModalHeader` and `NgxSmartModalFooter`
- Content projection for body
- Configurable width, closable, maskClosable

### Usage

```ts
import { Component } from '@angular/core';
import { NgxSmartModalComponent, NgxSmartModalHeaderComponent, NgxSmartModalFooterComponent } from 'ngx-dashboard-kit';

@Component({
  standalone: true,
  imports: [NgxSmartModalComponent, NgxSmartModalHeaderComponent, NgxSmartModalFooterComponent],
  template: `
    <button nz-button (click)="open = true">Open</button>
    <lib-ngx-smart-modal [(visible)]="open" [width]="600">
      <lib-ngx-smart-modal-header title="Create Item"></lib-ngx-smart-modal-header>
      <div>Form content here...</div>
      <lib-ngx-smart-modal-footer (confirm)="save()" (cancel)="open = false"></lib-ngx-smart-modal-footer>
    </lib-ngx-smart-modal>
  `,
})
export class DemoModalComponent {
  open = false;
  save() {}
}
```

### Inputs

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `visible` | `boolean` | `false` | Show/hide modal (two-way bindable). |
| `width` | `number | string` | `520` | Modal width. |
| `closable` | `boolean` | `true` | Show close icon. |
| `maskClosable` | `boolean` | `true` | Close on mask click. |

### Events

| Name | Payload | Description |
|------|---------|-------------|
| `visibleChange` | `boolean` | Emits when visibility changes. |

### License

MIT


