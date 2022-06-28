import { ServerApiService } from './../server-api/server-api.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { User } from './../../models/user/User';

@Injectable({
  providedIn: 'root',
})
export class UserService extends ServerApiService {
  createUser(user: User): Promise<void> {
    return this.post(`${environment.apiUrl}/user`, user);
  }
}
