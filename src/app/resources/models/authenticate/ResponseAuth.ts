export class ResponseSignIn {
  public token: string;
  public id: string;
  public cpf: string;

  constructor() {
    this.token = '';
    this.id = '';
    this.cpf = '';
  }
}
