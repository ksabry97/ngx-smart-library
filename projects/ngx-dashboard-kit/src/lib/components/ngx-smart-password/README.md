## NgxSmartPassword Component

Password input with toggle visibility and reactive-forms integration.

### Features

- Password type input with show/hide toggle
- Built-in validation surface (min length, pattern, required)
- Works with Reactive Forms

### Usage

```ts
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSmartPasswordComponent } from 'ngx-dashboard-kit';

@Component({
  standalone: true,
  imports: [NgxSmartPasswordComponent],
  template: `
    <form [formGroup]="form">
      <lib-ngx-smart-password
        label="Password"
        placeholder="Enter a strong password"
        [parentGroup]="form"
        controlName="password">
      </lib-ngx-smart-password>
    </form>
  `,
})
export class DemoPasswordComponent {
  form = this.fb.group({ password: ['', [Validators.required]] });
  constructor(private fb: FormBuilder) {}
}
```

### Inputs

Same surface as `NgxSmartInput`.

### License

MIT


