import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-balance-wallet',
  templateUrl: './balance-wallet.component.html',
  styleUrls: ['./balance-wallet.component.css'],
})
export class BalanceWalletComponent {
  balanceIsVisible: boolean = false;
  @Input() value: number = 0;

  setIsVisible() {
    this.balanceIsVisible = !this.balanceIsVisible;
  }

  getBalance() {
    let balanceValue = '***';
    debugger;
    if (this.balanceIsVisible) {
      balanceValue = this.value.toFixed(2);
    }
    return balanceValue;
  }
}
