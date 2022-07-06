export class Store {
  public id: string;
  public name: string;
  public cnpj: string;
  public percent: number;
  public urlLogo: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.cnpj = '';
    this.percent = 0;
    this.urlLogo = '';
  }
}
