export class RequestSignUp {
  public name: string;
  public bithDate: string;
  public email: string;
  public cpf: string;
  public celphone: number;
  public password: string;
  public sendNotification: boolean;

  constructor() {
    this.name = '';
    this.bithDate = '';
    this.email = '';
    this.cpf = '';
    this.celphone = 0;
    this.password = '';
    this.sendNotification = false;
  }
}
