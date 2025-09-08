## NgxSmartDatePicker Component

A standalone Angular date (and range) picker built on `ng-zorro-antd/date-picker` with first-class reactive-forms support.

### Features

- Built on `nz-date-picker` with day/week/month/quarter/year modes
- Single date and range selection
- Reactive Forms integration via `parentGroup` and `controlName`
- Optional time selection and clear button
- Customizable display format

### Installation

Peer dependency: `ng-zorro-antd`.

```bash
npm install ng-zorro-antd
```

### Usage

```ts
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgxSmartDatePickerComponent } from 'ngx-dashboard-kit';

@Component({
  selector: 'app-demo-date',
  standalone: true,
  imports: [NgxSmartDatePickerComponent],
  template: `
    <form [formGroup]="form">
      <lib-ngx-smart-date-picker
        label="Date"
        [parentGroup]="form"
        controlName="date"
        [mode]="'date'"
        [allowClear]="true"
        [showTime]="false"
        dateFormat="yyyy-MM-dd">
      </lib-ngx-smart-date-picker>
    </form>
  `,
})
export class DemoDateComponent {
  form = this.fb.group({ date: [null] });
  constructor(private fb: FormBuilder) {}
}
```

### Inputs

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `''` | Field label. |
| `placeholder` | `string` | `''` | Input placeholder. |
| `required` | `boolean` | `false` | Marks field required (UI only). |
| `disabled` | `boolean` | `false` | Disables control. |
| `readonly` | `boolean` | `false` | Readonly input state. |
| `mode` | `'date'|'week'|'month'|'quarter'|'year'` | `'date'` | Picker mode. |
| `allowClear` | `boolean` | `false` | Show clear icon. |
| `showTime` | `boolean` | `false` | Enable time selection. |
| `dateFormat` | `string` | `''` | Display format (Angular date pipe). |
| `parentGroup` | `FormGroup` | — | Parent reactive form. |
| `controlName` | `string` | — | FormControl name in `parentGroup`. |

### Notes

- Leverages ng-zorro locale; configure globally per ng-zorro docs.
- For ranges, use the underlying `nz-range-picker` variant in the component template if exposed by your version.

### License

MIT


