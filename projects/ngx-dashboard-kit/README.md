## ngx-dashboard-kit

[![npm version](https://img.shields.io/npm/v/ngx-dashboard-kit.svg)](https://www.npmjs.com/package/ngx-dashboard-kit)
[![npm downloads](https://img.shields.io/npm/dm/ngx-dashboard-kit.svg)](https://www.npmjs.com/package/ngx-dashboard-kit)
[![build](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://www.npmjs.com/package/ngx-dashboard-kit)

### Overview

`ngx-dashboard-kit` is a set of ready-to-use, standalone Angular components designed to help you build modern admin dashboards fast. It ships with smart data entry controls, a configurable table, and utilities built on top of `ng-zorro-antd`, following Angular best practices (standalone components, reactive forms, strong typing).

- **Key use cases**: operational dashboards, back-office apps, analytics consoles, internal tools.
- **Benefits**: consistent UX, accessible components, reactive forms integration, responsive design, and easy theming via CSS/SCSS.

### Installation

Install the library from npm:

```bash
npm install ngx-dashboard-kit
```

#### Peer dependencies

- **Angular**: v17+ (tested with v18)
- **ng-zorro-antd**: v17+
- **@angular/forms** and **@angular/common** (Angular core)

Install peer UI library if you don't already have it:

```bash
npm install ng-zorro-antd
```

Add `ng-zorro-antd` styles to your global styles if not already present (see ng-zorro docs for your Angular version).

### Getting Started

All components are standalone. You can either import them directly into your feature components or add them to a module if you prefer a module-based setup.

#### Import in a standalone component

```ts
// app/some-feature/some-feature.component.ts
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { NgxSmartInputComponent } from 'ngx-dashboard-kit';

@Component({
  selector: 'app-some-feature',
  standalone: true,
  imports: [ReactiveFormsModule, NgxSmartInputComponent],
  template: `
    <form [formGroup]="form">
      <lib-ngx-smart-input
        label="Email"
        placeholder="name@example.com"
        type="email"
        [parentGroup]="form"
        controlName="email">
      </lib-ngx-smart-input>
    </form>
  `,
})
export class SomeFeatureComponent {
  form = this.fb.group({ email: ['', [Validators.required, Validators.email]] });
  constructor(private fb: FormBuilder) {}
}
```

#### Import in a module (optional)

```ts
// app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxSmartInputComponent } from 'ngx-dashboard-kit';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, NgxSmartInputComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Available Components

Each component is exported from the package root, and is a standalone Angular component with strong reactive-forms support where applicable.

#### NgxSmartTable ([docs](src/lib/components/ngx-smart-table/README.md))

Customizable data table with sorting hooks, client-side pagination, lazy loading signals, and row/action events. Built on `ng-zorro-antd/table`.

Import:

```ts
import { NgxSmartTableComponent } from 'ngx-dashboard-kit';
```

Usage:

```ts
// component.ts
columns = [
  { field: 'id', header: 'ID', sortable: true, width: '80px' },
  { field: 'name', header: 'Name', sortable: true },
  { field: 'email', header: 'Email' },
];

data = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
];

onRowClick(row: any) { /* ... */ }
onActionClick(e: { action: any; rowData: any; rowIndex: number }) { /* ... */ }
```

```html
<lib-ngx-smart-table
  [columns]="columns"
  [data]="data"
  [loading]="false"
  [paginator]="true"
  [rows]="10"
  [rowsPerPageOptions]="[5,10,20]"
  [actions]="[{ label: 'Edit', icon: 'edit' }, { label: 'Delete', icon: 'delete', severity: 'danger' }]"
  (onRowClick)="onRowClick($event)"
  (onActionClick)="onActionClick($event)">
</lib-ngx-smart-table>
```

Inputs:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| columns | `TableColumn[]` | `[]` | Column definitions (`field`, `header`, `sortable?`, `filter?`, `width?`, `template?`). |
| data | `T[]` | `[]` | Array of rows to render. |
| loading | `boolean` | `false` | Show loading spinner. |
| paginator | `boolean` | `true` | Enable client-side pagination UI. |
| rows | `number` | `10` | Page size. |
| rowsPerPageOptions | `number[]` | `[5,10,20]` | Page size options. |
| actions | `TableAction[]` | `[]` | Row actions (`label`, `icon?`, `severity?`, `disabled?`). |

Outputs:

| Name | Payload |
|------|---------|
| onRowSelect | `any` |
| onRowUnselect | `any` |
| onRowClick | `any` |
| onLazyLoad | `any` |
| onActionClick | `{ action: TableAction; rowData: T; rowIndex: number }` |

Customization:
- **Theming**: override the component SCSS classes in your global styles.
- **i18n**: provide localized column headers, action labels, and cell templates.

#### NgxSmartInput ([docs](src/lib/components/ngx-smart-input/README.md))

Form input with built-in error messaging via `ErrorMessages` service and first-class reactive-forms support.

Import:

```ts
import { NgxSmartInputComponent } from 'ngx-dashboard-kit';
```

Usage:

```ts
form = this.fb.group({ username: ['', [Validators.required, Validators.minLength(3)]] });
```

```html
<form [formGroup]="form">
  <lib-ngx-smart-input
    label="Username"
    placeholder="Your username"
    [parentGroup]="form"
    controlName="username"
    [showClear]="true">
  </lib-ngx-smart-input>
</form>
```

Inputs:

| Name | Type | Default |
|------|------|---------|
| label | `string` | `''` |
| placeholder | `string` | `''` |
| type | `'text' | 'email' | 'password'` | `'text'` |
| required | `boolean` | `false` |
| disabled | `boolean` | `false` |
| readonly | `boolean` | `false` |
| maxLength | `number?` | `undefined` |
| minLength | `number?` | `undefined` |
| pattern | `string?` | `undefined` |
| validationRules | `ValidationRule[]` | `[]` |
| showClear | `boolean` | `false` |
| showIcon | `boolean` | `false` |
| icon | `string` | `''` |
| suffix | `string` | `''` |
| prefix | `string` | `''` |
| parentGroup | `FormGroup` | — |
| controlName | `string` | — |

#### NgxSmartNumberInput ([docs](src/lib/components/ngx-smart-number-input/README.md))

Numeric input with validation helpers and reactive-forms integration.

Import:

```ts
import { NgxSmartNumberInputComponent } from 'ngx-dashboard-kit';
```

Usage:

```ts
form = this.fb.group({ amount: [null, [Validators.required]] });
```

```html
<form [formGroup]="form">
  <lib-ngx-smart-number-input
    label="Amount"
    placeholder="0.00"
    [parentGroup]="form"
    controlName="amount">
  </lib-ngx-smart-number-input>
</form>
```

Inputs: same surface as `NgxSmartInput` plus numeric formatting can be applied via `pattern` as needed.

#### NgxSmartDatePicker ([docs](src/lib/components/ngx-smart-date-picker/README.md))

Date (and range modes) picker built on `ng-zorro-antd/date-picker` with reactive-forms integration.

Import:

```ts
import { NgxSmartDatePickerComponent } from 'ngx-dashboard-kit';
```

Usage:

```ts
form = this.fb.group({ date: [null] });
```

```html
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
```

Inputs:

| Name | Type | Default |
|------|------|---------|
| label | `string` | `''` |
| placeholder | `string` | `''` |
| required | `boolean` | `false` |
| disabled | `boolean` | `false` |
| readonly | `boolean` | `false` |
| maxLength | `number?` | `undefined` |
| minLength | `number?` | `undefined` |
| pattern | `string?` | `undefined` |
| validationRules | `ValidationRule[]` | `[]` |
| showClear | `boolean` | `false` |
| showIcon | `boolean` | `false` |
| icon | `string` | `''` |
| suffix | `string` | `''` |
| prefix | `string` | `''` |
| mode | `'date'|'week'|'month'|'quarter'|'year'` | `'date'` |
| allowClear | `boolean` | `false` |
| showTime | `boolean` | `false` |
| dateFormat | `string` | `''` |
| parentGroup | `FormGroup` | — |
| controlName | `string` | — |

#### NgxSmartFileUploader ([docs](src/lib/components/ngx-smart-file-uploader/README.md))

Drag-and-drop capable uploader powered by `ng-zorro-antd/upload`, with basic ControlValueAccessor implementation and form binding.

Import:

```ts
import { NgxSmartFileUploaderComponent } from 'ngx-dashboard-kit';
```

Usage:

```ts
form = this.fb.group({ files: [[]] });
```

```html
<form [formGroup]="form">
  <lib-ngx-smart-file-uploader
    label="Attachments"
    uploadUrl="/api/upload"
    [allowMultiple]="true"
    [parentGroup]="form"
    controlName="files">
  </lib-ngx-smart-file-uploader>
</form>
```

Inputs:

| Name | Type | Default |
|------|------|---------|
| uploadUrl | `string` | `''` |
| allowMultiple | `boolean` | `false` |
| label / placeholder / required / disabled / readonly / maxLength / minLength / pattern / validationRules / showClear / showIcon / icon / suffix / prefix | See input types above | — |
| parentGroup | `FormGroup` | — |
| controlName | `string` | — |

#### NgxSmartSelect ([docs](src/lib/components/ngx-smart-select/README.md))

Select with single/multiple/tags modes on top of `ng-zorro-antd/select`.

Import:

```ts
import { NgxSmartSelectComponent } from 'ngx-dashboard-kit';
```

Usage:

```ts
form = this.fb.group({ country: [null] });
options = [
  { text: 'Egypt', value: 'eg' },
  { text: 'UAE', value: 'ae' },
];
```

```html
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
```

Inputs:

| Name | Type | Default |
|------|------|---------|
| label / placeholder / required / disabled / readonly / maxLength / minLength / pattern / validationRules / showClear / showIcon / icon / suffix / prefix | See input types above | — |
| options | `{ text: string; value: string }[]` | `[]` |
| mode | `'multiple'|'tags'|'default'` | `'default'` |
| allowClear | `boolean` | `false` |
| parentGroup | `FormGroup` | — |
| controlName | `string` | — |

#### NgxSmartPassword ([docs](src/lib/components/ngx-smart-password/README.md))

Password input with toggle visibility and reactive-forms integration.

Import:

```ts
import { NgxSmartPasswordComponent } from 'ngx-dashboard-kit';
```

Usage:

```ts
form = this.fb.group({ password: ['', [Validators.required]] });
```

```html
<form [formGroup]="form">
  <lib-ngx-smart-password
    label="Password"
    placeholder="Enter a strong password"
    [parentGroup]="form"
    controlName="password"
    [showClear]="true">
  </lib-ngx-smart-password>
</form>
```

Inputs: same surface as `NgxSmartInput`.

#### NgxSmartSearch ([docs](src/lib/components/ngx-smart-search/README.md))

#### NgxSmartModal ([docs](src/lib/components/ngx-smart-modal/README.md))

#### NgxSmartModalHeader ([docs](src/lib/components/ngx-smart-modal-header/README.md))

#### NgxSmartModalFooter ([docs](src/lib/components/ngx-smart-modal-footer/README.md))

Lightweight debounced search input implementing ControlValueAccessor.

Import:

```ts
import { NgxSmartSearchComponent } from 'ngx-dashboard-kit';
```

Usage:

```html
<lib-ngx-smart-search placeholder="Search..." [(ngModel)]="query"></lib-ngx-smart-search>
```

Inputs:

| Name | Type | Default |
|------|------|---------|
| placeholder | `string` | `''` |
| disabled | `boolean` | `false` |

Events: two-way `ngModel`/form control via CVA; debounced valueChanges (~500ms).

### Features

- **Responsive design**: components use flexible layouts and adapt to different viewports.
- **Theme customization**: override SCSS/CSS variables or component classes in your `styles.scss` to change colors, paddings, and typography.
- **Accessibility (a11y)**: keyboard-focusable controls leveraging `ng-zorro-antd` accessibility, with proper labels and states. Ensure to provide meaningful `label` inputs.
- **Performance**: debounced search, OnPush-friendly templates, and lazy-loading hooks for tables.

### Advanced Usage

- **Extending components**: compose via content projection and wrap the standalone components in your design system. Provide custom column templates in the table by adding template refs keyed by `TableColumn.template` field.
- **Angular forms integration**:
  - Reactive: pass `parentGroup` and `controlName` for form-bound components.
  - Template-driven: use CVA-capable components like `NgxSmartSearch` with `[(ngModel)]`.
- **Best practices for large dashboards**:
  - Virtualize long tables when possible; use server-side pagination and `(onLazyLoad)` to fetch data.
  - Memoize heavy inputs and keep data immutable to reduce change detection.
  - Split features into standalone components and leverage route-level lazy loading.

### Services

- Core services: see `src/lib/services/README.md`.
- Auth services: see `src/lib/Auth-Module/services/README.md`.

### Extra Components

- Feedback: `ngx-smart-alert`, `ngx-smart-confirmation`, `ngx-smart-spinner` (see their READMEs under `src/lib/Feedback`).
- Navigation: `smart-side-bar` (see `src/lib/Navigation/components/smart-side-bar/README.md`).
### Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a feature branch
3. Commit your changes with clear messages
4. Open a Pull Request describing the change, motivation, and testing

Please file bugs and feature requests under Issues.

### License

MIT

