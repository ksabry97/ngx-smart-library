import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly http: HttpClient) {}

  login(loginUrl: string, user: any) {
    return this.http.post(loginUrl, user);
  }
}
