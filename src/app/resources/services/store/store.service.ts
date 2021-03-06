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
}
