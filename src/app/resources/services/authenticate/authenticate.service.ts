import { Injectable } from '@angular/core';
import { RequestAuth } from './../../models/authenticate/RequestAuth';
import { ResponseAuth } from './../../models/authenticate/ResponseAuth';
import { ServerApiService } from './../server-api/server-api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService extends ServerApiService {
  async doSignIn(request: RequestAuth): Promise<void> {
    const resp: ResponseAuth = await this.post(
      'user/authenticate',
      'user',
      request
    );
    if (!resp.token) {
      throw new Error('Login Inválido');
    }
    localStorage.setItem('token', resp.token);
    localStorage.setItem('cpf', request.username);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logOut(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('cpf');
  }
}
