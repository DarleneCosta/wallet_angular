import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgxSpinnerService } from 'ngx-spinner';
import { Store } from './../../../resources/models/store/Store';
import { StoreService } from './../../../resources/services/store/store.service';
import { AlertService } from './../../../resources/services/alert/alert.service';
import { WalletService } from './../../../resources/services/wallet/wallet.service';
import { Wallet } from './../../../resources/models/wallet/Wallet';

@Component({
  selector: 'app-add-preferences',
  templateUrl: './add-preferences.component.html',
  styleUrls: ['./add-preferences.component.css'],
})
export class AddPreferencesComponent implements OnInit {
  faPlus = faPlus;
  dialog: boolean = false;
  stores: Array<Store> = [];
  selected: string = '-1';
  @Input() wallet!: Wallet;
  @Output() reload = new EventEmitter();
  constructor(
    private storeService: StoreService,
    private walletService: WalletService,
    private spinner: NgxSpinnerService,
    private showAlert: AlertService
  ) {}

  ngOnInit(): void {
    this.loadStores();
  }

  closeDialog(): void {
    this.dialog = false;
    this.selected = '-1';
  }
  openDialog(): void {
    this.dialog = true;
  }

  async loadStores(): Promise<void> {
    this.spinner.show();
    try {
      this.stores = await this.storeService.getStores();
    } catch (err: any) {
      this.showAlert.error(err.message || 'Error ao carregar');
    } finally {
      this.spinner.hide();
    }
  }

  async addStorePrefence(): Promise<void> {
    if (this.selected == '-1') return;
    this.spinner.show();
    try {
      const storeSelected: any = this.stores.find(
        (s: Store) => s.id === this.selected
      );
      await this.walletService.addStoreInWallet(storeSelected, this.wallet);
      this.reload.emit();
      this.closeDialog();
    } catch (err: any) {
      this.showAlert.error(err.message || 'Error ao salvar');
    } finally {
      this.spinner.hide();
    }
  }
}
