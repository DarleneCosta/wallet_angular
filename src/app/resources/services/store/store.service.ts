import { ServerApiService } from './../server-api/server-api.service';
import { Injectable } from '@angular/core';
import { Store } from './../../models/store/Store';

@Injectable({
  providedIn: 'root',
})
export class StoreService extends ServerApiService {
  getStores(): Promise<Store[]> {
    return this.get(`store`);
  }

  addStorePreference(id: string): Promise<void> {
    return this.post(`storePreference`, id);
  }
}
