import { Component, Input } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-balance-wallet',
  templateUrl: './balance-wallet.component.html',
  styleUrls: ['./balance-wallet.component.css'],
})
export class BalanceWalletComponent {
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  balanceIsVisible: boolean = false;
  @Input() value: string = '';

  setIsVisible() {
    this.balanceIsVisible = !this.balanceIsVisible;
  }

  getBalance() {
    let balanceValue = '***';
    if (this.balanceIsVisible) {
      balanceValue = parseFloat(this.value).toFixed(2);
    }
    return balanceValue;
  }
}
