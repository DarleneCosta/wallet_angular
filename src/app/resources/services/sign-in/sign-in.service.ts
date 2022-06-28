import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { RequestSignIn } from './../../models/sign-in/RequestSignIn';
import { ResponseSignIn } from './../../models/sign-in/ResponseSignIn';
import { ServerApiService } from './../server-api/server-api.service';

@Injectable({
  providedIn: 'root',
})
export class SignInService extends ServerApiService {
  constructor(
    protected _http: HttpClient,
    @Inject('URL_API') private _urlAPI: string,
    private router: Router
  ) {
    super(_http, _urlAPI);
  }

  async doSignIn(requestSignIn: RequestSignIn): Promise<void> {
    const resp: ResponseSignIn = await this.post('login', requestSignIn);
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

  // public doSignIn(requestSignIn: RequestSignIn):  {
  //   // return this.httpCliente.post<ResponseSignIn>(
  //   //   `${environment.apiUrl}/login`,
  //   //   requestSignIn
  //   // );
  //   time.sleep(2000)
  //   return new ResponseSignIn({token:'123', id: 'x', cpf:'321'})
  // }
}
