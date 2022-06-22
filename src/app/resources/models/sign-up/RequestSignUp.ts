export class RequestSignUp {
  public name: string;
  public birthDate: string;
  public email: string;
  public cpf: string;
  public cellphone: number;
  public password: string;
  public sendNotification: boolean;

  constructor() {
    this.name = '';
    this.birthDate = '';
    this.email = '';
    this.cpf = '';
    this.cellphone = 0;
    this.password = '';
    this.sendNotification = false;
  }
}
