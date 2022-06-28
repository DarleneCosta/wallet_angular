import { StorePreference } from './../store-preference/StorePreference';

export class Wallet {
  public id: string;
  public cpf: string;
  public balance: number;
  public stores: Array<StorePreference[]>;

  constructor() {
    this.id = '';
    this.cpf = '';
    this.balance = 0;
    this.stores = [];
  }
}
