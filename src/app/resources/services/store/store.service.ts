import { ServerApiService } from './../server-api/server-api.service';
import { Injectable } from '@angular/core';
import { Store } from './../../models/store/Store';

@Injectable({
  providedIn: 'root',
})
export class StoreService extends ServerApiService {
  tipo: string = 'store';
  getStores(): Promise<Store[]> {
    return this.get(`store`, this.tipo);
  }

  addStorePreference(store: Store): Promise<void> {
    const cpf = localStorage.getItem('cpf');
    return this.put(`store/cpf/${cpf}`, this.tipo, store);
  }
}
