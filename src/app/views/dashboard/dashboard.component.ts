import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Wallet } from './../../resources/models/wallet/Wallet';
import { WalletService } from './../../resources/services/wallet/wallet.service';
import { AuthenticateService } from './../../resources/services/authenticate/authenticate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  wallet = new Wallet();
  msgError: string = '';
  constructor(
    private router: Router,
    private authService: AuthenticateService,
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
      if (err.state == 401) {
        this.authService.logOut();
      }
      this.msgError = err.message || 'Error ao carregar';
    } finally {
      this.spinner.hide();
    }
  }
}
