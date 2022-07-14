import { ServerApiService } from './../server-api/server-api.service';
import { Injectable } from '@angular/core';
import { Wallet } from './../../models/wallet/Wallet';

@Injectable({
  providedIn: 'root',
})
export class WalletService extends ServerApiService {
  tipo: string = 'wallet';
  getWallet(): Promise<Wallet> {
    const cpf = localStorage.getItem('cpf');
    return this.get(`wallet/cpf/${cpf}`, this.tipo);
  }
}
