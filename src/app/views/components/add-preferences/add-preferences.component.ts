import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgxSpinnerService } from 'ngx-spinner';
import { Store } from './../../../resources/models/store/Store';
import { StoreService } from './../../../resources/services/store/store.service';
import { AlertService } from './../../../resources/services/alert/alert.service';
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
  alert = {
    title: 'Lojas não localizadas',
    subtitle: 'Erro ao carregar',
  };
  constructor(
    private storeService: StoreService,
    private spinner: NgxSpinnerService,
    private showAlert: AlertService
  ) {}

  ngOnInit(): void {
    this.loadStores();
  }

  closeDialog(): void {
    this.dialog = false;
  }
  openDialog(): void {
    this.dialog = true;
  }

  async loadStores(): Promise<void> {
    this.spinner.show();
    try {
      this.stores = await this.storeService.getStores();
    } catch (err: any) {
      this.alert.subtitle = err.error.message || 'Error ao carregar';
      console.log(err.error);
    } finally {
      this.spinner.hide();
    }
  }

  async addStorePrefence(): Promise<void> {
    if (this.selected == '-1') return;
    this.spinner.show();
    try {
      await this.storeService.addStorePreference(this.selected);
      this.closeDialog();
      //avisar para recarregar a tela
    } catch (err: any) {
      this.showAlert.error(err.error.message || 'Error ao salvar');
      console.log(err.error);
    } finally {
      this.spinner.hide();
    }
  }
}
