import { Store } from './../store/Store';

export class Wallet {
  public id: string;
  public cpf: string;
  public name: string;
  public balance: string;
  public stores: Array<Store[]>;

  constructor() {
    this.id = '';
    this.cpf = '';
    this.name = '';
    this.balance = '';
    this.stores = [];
  }
}
