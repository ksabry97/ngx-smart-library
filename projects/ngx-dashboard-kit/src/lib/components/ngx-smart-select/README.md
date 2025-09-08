## NgxSmartSelect Component

Select input supporting single, multiple, and tags modes on top of `ng-zorro-antd/select` with reactive-forms integration.

### Features

- Single, multiple, and tags modes
- Searchable options
- Allow clear
- Reactive Forms binding

### Usage

```ts
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgxSmartSelectComponent } from 'ngx-dashboard-kit';

@Component({
  standalone: true,
  imports: [NgxSmartSelectComponent],
  template: `
    <form [formGroup]="form">
      <lib-ngx-smart-select
        label="Country"
        [options]="options"
        [mode]="'default'"
        [allowClear]="true"
        [parentGroup]="form"
        controlName="country">
      </lib-ngx-smart-select>
    </form>
  `,
})
export class DemoSelectComponent {
  form = this.fb.group({ country: [null] });
  options = [
    { text: 'Egypt', value: 'eg' },
    { text: 'UAE', value: 'ae' },
  ];
  constructor(private fb: FormBuilder) {}
}
```

### Inputs

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `{ text: string; value: string }[]` | `[]` | Options list. |
| `mode` | `'multiple'|'tags'|'default'` | `'default'` | Selection mode. |
| `allowClear` | `boolean` | `false` | Show clear icon. |
| Common input surface | — | — | See library README for shared inputs. |
| `parentGroup` | `FormGroup` | — | Parent form. |
| `controlName` | `string` | — | Control name. |

### License

MIT


