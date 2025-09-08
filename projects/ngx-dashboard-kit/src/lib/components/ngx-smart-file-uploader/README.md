## NgxSmartFileUploader Component

Drag-and-drop capable file uploader built on `ng-zorro-antd/upload`, with basic ControlValueAccessor and reactive-forms binding.

### Features

- Single/multiple file selection
- Drag-and-drop area
- Upload to provided endpoint
- Reactive Forms support via `parentGroup` and `controlName`

### Usage

```ts
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgxSmartFileUploaderComponent } from 'ngx-dashboard-kit';

@Component({
  standalone: true,
  imports: [NgxSmartFileUploaderComponent],
  template: `
    <form [formGroup]="form">
      <lib-ngx-smart-file-uploader
        label="Attachments"
        uploadUrl="/api/upload"
        [allowMultiple]="true"
        [parentGroup]="form"
        controlName="files">
      </lib-ngx-smart-file-uploader>
    </form>
  `,
})
export class DemoUploaderComponent {
  form = this.fb.group({ files: [[]] });
  constructor(private fb: FormBuilder) {}
}
```

### Inputs

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `uploadUrl` | `string` | `''` | Target endpoint for uploads. |
| `allowMultiple` | `boolean` | `false` | Allow multiple files. |
| Common input surface | — | — | See library README for shared inputs. |
| `parentGroup` | `FormGroup` | — | Parent reactive form. |
| `controlName` | `string` | — | FormControl name. |

### Notes

- Configure headers/auth via global interceptors or component options.
- For controlled uploads, set `nzBeforeUpload`/manual mode in the component implementation.

### License

MIT


