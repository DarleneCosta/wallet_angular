export class User {
  public id: string;
  public name: string;
  public birthDate: string;
  public email: string;
  public cellphone: number;
  public cpf: string;
  public password: string;
  public sendNotification: boolean;

  constructor() {
    this.id = '';
    this.name = '';
    this.birthDate = '';
    this.cellphone = 0;
    this.email = '';
    this.cpf = '';
    this.password = '';
    this.sendNotification = false;
  }
}
