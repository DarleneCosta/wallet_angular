import { ServerApiService } from './../server-api/server-api.service';
import { Injectable } from '@angular/core';
import { Wallet } from './../../models/wallet/Wallet';

@Injectable({
  providedIn: 'root',
})
export class WalletService extends ServerApiService {
  getWallet(cpf: string): Promise<Wallet> {
    return this.get(`wallet/${cpf}`);
  }
}
