import { ServerApiService } from './../server-api/server-api.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { Wallet } from './../../models/wallet/Wallet';

@Injectable({
  providedIn: 'root',
})
export class WalletService extends ServerApiService {
  getWallet(cpf: string): Promise<Wallet> {
    return this.get(`wallet?cpf=${cpf}`);
  }
}
