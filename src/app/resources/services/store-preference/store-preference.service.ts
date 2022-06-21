import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { StorePreference } from './../../models/store-preference/StorePreference';

@Injectable({
  providedIn: 'root',
})
export class StorePreferenceService {
  constructor(private httpCliente: HttpClient) {}
  public getStorePreference(cpf: string): Observable<Array<StorePreference>> {
    let url = `${environment.apiUrl}/storePreference`;
    let queryParams = new HttpParams();
    queryParams = queryParams.append('cpf', cpf);
    return this.httpCliente.get<Array<StorePreference>>(url, {
      params: queryParams,
    });
  }
}
