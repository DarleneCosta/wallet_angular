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
    if (!resp.access_token) {
      throw new Error('Login Inválido');
    }
    localStorage.setItem('access_token', resp.access_token);
    localStorage.setItem('cpf', request.username);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('access_token') !== null;
  }

  logOut(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('cpf');
  }
}
