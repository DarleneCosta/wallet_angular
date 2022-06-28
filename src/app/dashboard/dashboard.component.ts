import { Component, OnInit } from '@angular/core';
import { Wallet } from './../resources/models/wallet/Wallet';
import { WalletService } from './../resources/services/wallet/wallet.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  wallet = new Wallet();
  constructor(private walletService: WalletService) {}

  ngOnInit(): void {
    this.loadWallet();
  }

  public async loadWallet() {
    try {
      let idUser = '0'; //todo: onde pegar?
      await this.walletService.getWallet(idUser);
    } catch (err: any) {
      console.log(err.error);
    }
  }
}
