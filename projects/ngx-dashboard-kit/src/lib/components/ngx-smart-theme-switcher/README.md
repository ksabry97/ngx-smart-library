## NgxSmartThemeSwitcher Component

UI toggle to switch between light and dark themes using `ThemeSwitcherService`.

### Features

- Toggles application theme
- Persists selection via service (e.g., localStorage)
- Works with `ng-zorro-antd` theming

### Usage

```ts
import { Component } from '@angular/core';
import { NgxSmartThemeSwitcherComponent } from 'ngx-dashboard-kit';

@Component({
  standalone: true,
  imports: [NgxSmartThemeSwitcherComponent],
  template: `<lib-ngx-smart-theme-switcher></lib-ngx-smart-theme-switcher>`,
})
export class DemoThemeSwitcherComponent {}
```

### Notes

- Ensure `ThemeSwitcherService` is provided in the app and wired to CSS variables or ng-zorro theme provider.

### License

MIT


