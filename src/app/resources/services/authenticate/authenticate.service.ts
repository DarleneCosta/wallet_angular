import { Injectable } from '@angular/core';
import { RequestAuth } from './../../models/authenticate/RequestAuth';
import { ResponseAuth } from './../../models/authenticate/ResponseAuth';
import { ServerApiService } from './../server-api/server-api.service';

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
    localStorage.setItem('cpf', resp.cpf);

    this.router.navigateByUrl('/dashboard');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logOut(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('cpf');
    this.router.navigateByUrl('/login');
  }
}
