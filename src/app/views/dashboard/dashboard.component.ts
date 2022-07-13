import { Component, OnInit } from '@angular/core';
import { Wallet } from './../../resources/models/wallet/Wallet';
import { WalletService } from './../../resources/services/wallet/wallet.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  wallet = new Wallet();
  msgError: string = '';
  constructor(
    private walletService: WalletService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.loadWallet();
  }

  public async loadWallet() {
    this.spinner.show();
    try {
      this.wallet = await this.walletService.getWallet();
    } catch (err: any) {
      this.msgError = err.error.message || 'Error ao carregar';
      console.log(err.error);
    } finally {
      this.spinner.hide();
    }
  }
}
