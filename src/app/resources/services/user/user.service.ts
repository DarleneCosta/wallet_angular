import { ServerApiService } from './../server-api/server-api.service';
import { Injectable } from '@angular/core';
import { User } from './../../models/user/User';

@Injectable({
  providedIn: 'root',
})
export class UserService extends ServerApiService {
  tipo: string = 'user';
  createUser(user: User): Promise<void> {
    return this.post(`user`, this.tipo, user);
  }
}
