export class StorePreference {
  public id: string;
  public name: string;
  public birthDate: string;
  public email: string;
  public cellphone: string;
  public cpf: string;
  public password: string;
  public sendNotification: boolean;

  constructor() {
    this.id = '';
    this.name = '';
    this.birthDate = '';
    this.cellphone = '';
    this.cpf = '';
    this.password = '';
    this.sendNotification = false;
  }
}
