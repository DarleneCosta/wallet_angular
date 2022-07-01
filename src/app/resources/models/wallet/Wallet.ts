import { StorePreference } from './../store-preference/StorePreference';

export class Wallet {
  public id: string;
  public cpf: string;
  public name: string;
  public balance: number;
  public stores: Array<StorePreference[]>;

  constructor() {
    this.id = '';
    this.cpf = '';
    this.name = '';
    this.balance = 0;
    this.stores = [];
  }
}
