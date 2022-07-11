import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServerApiService {
  constructor(
    protected http: HttpClient,
    @Inject('API_URL_USER') private apiUrlUser: string,
    @Inject('API_URL_WALLET') private apiUrlWallet: string,
    @Inject('API_URL_STORE') private apiUrlStore: string
  ) {}

  public post(url: string, tipo: string, body: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.obterUrl(url, tipo), body).subscribe({
        next: (v) => resolve(v),
        error: (e) => reject(e),
      });
    });
  }

  public put(url: string, tipo: string, body: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(this.obterUrl(url, tipo), body).subscribe({
        next: (v) => resolve(v),
        error: (e) => reject(e),
      });
    });
  }

  public get(url: string, tipo: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.obterUrl(url, tipo)).subscribe({
        next: (v) => resolve(v),
        error: (e) => reject(e),
      });
    });
  }

  private obterUrl(url: string, tipo: string): string {
    if (tipo === 'user') {
      return `${this.apiUrlUser}/${url}`;
    } else if (tipo === 'wallet') {
      return `${this.apiUrlWallet}/${url}`;
    } else {
      return `${this.apiUrlStore}/${url}`;
    }
  }
}
