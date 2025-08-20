import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxSmartPasswordComponent } from '../../../components/ngx-smart-password';
import { NgxSmartInputComponent } from '../../../components/ngx-smart-input';
import { matchPasswordValidator } from '../../services/passwordCutsomValidator';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'ngx-smart-login-page',
  standalone: true,
  imports: [
    CommonModule,
    NgxSmartPasswordComponent,
    NgxSmartInputComponent,
    ReactiveFormsModule,
    NzIconModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  activeTab = 0;
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  isPasswordForgetten: boolean = false;
  @Input() loginUrl: string = '';
  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly loginServ: LoginService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: [
        '',
        [Validators.required, matchPasswordValidator('password')],
      ],
    });
  }

  get passwordMismatchError() {
    return this.registerForm
      .get('confirmPassword')
      ?.getError('passwordMismatch');
  }

  login() {
    if (this.loginForm.valid) {
      this.loginServ.login(this.loginUrl, this.loginForm.value).subscribe({
        next: () => {
          this.router.navigateByUrl('/');
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  submitRegisterForm() {
    console.log(this.registerForm, 'ssssss');
  }
}
