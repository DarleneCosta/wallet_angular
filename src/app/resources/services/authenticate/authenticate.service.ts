import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { RequestAuth } from './../../models/authenticate/RequestAuth';
import { ResponseAuth } from './../../models/authenticate/ResponseAuth';
import { ServerApiService } from './../server-api/server-api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService extends ServerApiService {
  constructor(
    protected _http: HttpClient,
    @Inject('URL_API') private _urlAPI: string,
    private router: Router
  ) {
    super(_http, _urlAPI);
  }

  async doSignIn(request: RequestAuth): Promise<void> {
    const resp: ResponseAuth = await this.post('login', request);
    if (!resp.token) {
      throw new Error('Login Inválido');
    }
    localStorage.setItem('token', resp.token);
    localStorage.setItem('cpf', request.cpf);

    this.router.navigate(['dashboard']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logOut(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('cpf');
    this.router.navigate(['signIn']);
  }
}
