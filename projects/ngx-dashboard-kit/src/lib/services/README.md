## Core Services

Overview of reusable services provided by the library.

### ErrorMessagesService (`error-messages.service.ts`)

Provides consistent error messages for form controls based on validators.

- API (typical):
  - `getErrorMessage(control: AbstractControl, label?: string): string | null`

### ModalService (`modal.service.ts`)

Convenience layer to open/close `NgxSmartModal` instances, centralizing configuration.

- API (typical):
  - `open(options)`
  - `close(id?)`

### ThemeSwitcherService (`theme-switcher.service.ts`)

Toggles light/dark themes and persists preference.

- API (typical):
  - `setTheme(theme: 'light'|'dark')`
  - `toggleTheme()`
  - `getTheme(): 'light'|'dark'`

### ToastMessagesService (`toast-messages.service.ts`)

Displays transient toast notifications.

- API (typical):
  - `success(message: string)`
  - `info(message: string)`
  - `warning(message: string)`
  - `error(message: string)`

> Note: See source files for exact signatures in this version.


