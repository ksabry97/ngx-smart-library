## Auth Module Services

Central services for authentication and request handling.

### AuthGuard (`Auth-guard.service.ts`)

Protects routes based on authentication state/roles.

- Usage: add to route `canActivate: [AuthGuard]`.

### HeadersInterceptor (`headers-interceptor.service.ts`)

HTTP interceptor to append auth headers (e.g., JWT) and common headers.

- Register in `providers` with `{ provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true }`.

### LoginService (`login.service.ts`)

Handles login/logout flows and token persistence.

- Typical API: `login(credentials)`, `logout()`, `isAuthenticated()`.

### PasswordCustomValidator (`passwordCutsomValidator.ts`)

Reusable password strength validator functions for form controls.

- Typical API: `strongPassword(): ValidatorFn`.


