import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from '../../projects/ngx-dashboard-kit/src/lib/Auth-Module/components/login-page';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, LoginPageComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';
  showPassword = false;
  login() {
    // Placeholder for login logic
    alert('Login clicked!');
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
