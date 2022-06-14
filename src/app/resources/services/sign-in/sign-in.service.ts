import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { RequestSignIn } from './../../models/sign-in/RequestSignIn';
import { ResponseSignIn } from './../../models/sign-in/ResponseSignIn';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  constructor(private httpCliente: HttpClient) {}
  public doLogin(requestSignIn: RequestSignIn): Observable<ResponseSignIn> {
    console.log(environment.apiUrl);
    return this.httpCliente.post<ResponseSignIn>(
      `${environment.apiUrl}/login`,
      requestSignIn
    );
  }
}
