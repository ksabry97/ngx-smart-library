# NgxSmartInput Component

A reusable, smart input component built with ng-zorro that provides reactive forms integration, custom validation, and error message handling.

## Features

- ✅ **ng-zorro Integration** - Uses nz-input with modern styling
- ✅ **Reactive Forms** - Full integration with Angular Reactive Forms
- ✅ **Custom Validation** - Support for custom validation rules
- ✅ **Error Handling** - Automatic error message display
- ✅ **Accessibility** - Proper ARIA labels and screen reader support
- ✅ **Customizable** - Configurable appearance and behavior
- ✅ **TypeScript** - Full type safety and IntelliSense support

## Installation

The component is part of the `ngx-dashboard-kit` library and requires ng-zorro to be installed:

```bash
npm install ng-zorro-antd @ant-design/icons-angular
```

## Usage

### Basic Usage

```typescript
import { NgxSmartInputComponent } from 'ngx-dashboard-kit';

@Component({
  imports: [NgxSmartInputComponent],
  // ... other component configuration
})
export class MyComponent {
  // Component logic
}
```

```html
<lib-ngx-smart-input
  label="Email Address"
  placeholder="Enter your email"
  type="email"
  required="true"
  [(ngModel)]="email"
></lib-ngx-smart-input>
```

### With Reactive Forms

```typescript
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class MyComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
}
```

```html
<form [formGroup]="form">
  <lib-ngx-smart-input
    label="Email Address"
    placeholder="Enter your email"
    type="email"
    formControlName="email"
  ></lib-ngx-smart-input>

  <lib-ngx-smart-input
    label="Password"
    placeholder="Enter your password"
    type="password"
    formControlName="password"
  ></lib-ngx-smart-input>
</form>
```

### With Custom Validation

```typescript
const customValidationRules: ValidationRule[] = [
  {
    type: 'custom',
    message: 'Password must contain at least one uppercase letter',
    customValidator: (value: string) => /[A-Z]/.test(value)
  }
];
```

```html
<lib-ngx-smart-input
  label="Password"
  type="password"
  [validationRules]="customValidationRules"
  [(ngModel)]="password"
></lib-ngx-smart-input>
```

## Input Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Label displayed above the input |
| `placeholder` | `string` | `''` | Placeholder text inside the input |
| `type` | `'text' \| 'email' \| 'password'` | `'text'` | Input type |
| `required` | `boolean` | `false` | Whether the field is required |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `readonly` | `boolean` | `false` | Whether the input is readonly |
| `maxLength` | `number` | `undefined` | Maximum character length |
| `minLength` | `number` | `undefined` | Minimum character length |
| `pattern` | `string` | `undefined` | Regex pattern for validation |
| `validationRules` | `ValidationRule[]` | `[]` | Custom validation rules |
| `showClear` | `boolean` | `false` | Show clear button |
| `showIcon` | `boolean` | `false` | Show icon in the input |
| `icon` | `string` | `''` | Icon name to display |
| `suffix` | `string` | `''` | Suffix text |
| `prefix` | `string` | `''` | Prefix text |

## Output Events

| Event | Type | Description |
|-------|------|-------------|
| `ngModelChange` | `any` | Emitted when the input value changes |
| `blur` | `void` | Emitted when the input loses focus |
| `focus` | `void` | Emitted when the input gains focus |
| `clear` | `void` | Emitted when the clear button is clicked |

## Validation Rules

The component supports custom validation rules through the `ValidationRule` interface:

```typescript
export interface ValidationRule {
  type: 'required' | 'minLength' | 'maxLength' | 'pattern' | 'email' | 'custom';
  value?: any;
  message: string;
  customValidator?: (value: any) => boolean;
}
```

## Styling

The component uses ng-zorro's default styling with custom enhancements:

```scss
.ngx-smart-input-container {
  .input-label {
    font-weight: 500;
    margin-bottom: 0.5rem;
    
    &.required::after {
      content: ' *';
      color: #ff4d4f;
    }
  }

  .input-wrapper {
    position: relative;
    
    &.has-error {
      .ant-input {
        border-color: #ff4d4f;
      }
    }
  }

  .error-message {
    color: #ff4d4f;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
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