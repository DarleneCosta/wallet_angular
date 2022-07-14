import { ServerApiService } from './../server-api/server-api.service';
import { Injectable } from '@angular/core';
import { isEqual, uniqWith } from 'lodash';
import { Wallet } from './../../models/wallet/Wallet';
import { Store } from './../../models/store/Store';

@Injectable({
  providedIn: 'root',
})
export class WalletService extends ServerApiService {
  tipo: string = 'wallet';
  getWallet(): Promise<Wallet> {
    const cpf = localStorage.getItem('cpf');
    return this.get(`wallet/cpf/${cpf}`, this.tipo);
  }

  addStoreInWallet(storeNew: Store, wallet: Wallet): Promise<void> {
    let walletUpdate = wallet;
    walletUpdate.stores.push(storeNew);
    walletUpdate.stores = uniqWith(walletUpdate.stores, isEqual);
    return this.put(`wallet`, this.tipo, walletUpdate);
  }
}
