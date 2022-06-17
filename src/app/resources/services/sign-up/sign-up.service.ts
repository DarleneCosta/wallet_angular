import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { RequestSignUp } from './../../models/sign-up/RequestSignUp';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private httpCliente: HttpClient) {}
  public doSignUp(requestSignUp: RequestSignUp) {
    return this.httpCliente.post(`${environment.apiUrl}/user`, requestSignUp);
  }
}
