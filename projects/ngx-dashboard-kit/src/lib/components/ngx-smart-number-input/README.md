## NgxSmartNumberInput Component

Numeric input with validation helpers and reactive-forms integration.

### Features

- Integer/decimal input
- Min/Max and pattern validation support
- Reactive Forms binding via `parentGroup` and `controlName`
- Optional clear icon and prefix/suffix

### Usage

```ts
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSmartNumberInputComponent } from 'ngx-dashboard-kit';

@Component({
  standalone: true,
  imports: [NgxSmartNumberInputComponent],
  template: `
    <form [formGroup]="form">
      <lib-ngx-smart-number-input
        label="Amount"
        placeholder="0.00"
        [parentGroup]="form"
        controlName="amount">
      </lib-ngx-smart-number-input>
    </form>
  `,
})
export class DemoNumberInputComponent {
  form = this.fb.group({ amount: [null, [Validators.required]] });
  constructor(private fb: FormBuilder) {}
}
```

### Inputs

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `''` | Field label. |
| `placeholder` | `string` | `''` | Placeholder text. |
| `required` | `boolean` | `false` | UI required indicator. |
| `disabled` | `boolean` | `false` | Disabled state. |
| `readonly` | `boolean` | `false` | Readonly state. |
| `maxLength` | `number?` | — | Max characters. |
| `minLength` | `number?` | — | Min characters. |
| `pattern` | `string?` | — | Regex for numeric formatting. |
| `validationRules` | `ValidationRule[]` | `[]` | Custom rules. |
| `showClear` | `boolean` | `false` | Show clear icon. |
| `prefix` | `string` | `''` | Prefix content. |
| `suffix` | `string` | `''` | Suffix content. |
| `parentGroup` | `FormGroup` | — | Parent form. |
| `controlName` | `string` | — | Control name. |

### License

MIT


