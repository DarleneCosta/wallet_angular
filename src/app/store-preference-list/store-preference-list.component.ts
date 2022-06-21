import { Component, OnInit } from '@angular/core';
import { StorePreference } from '../resources/models/store-preference/StorePreference';
import { StorePreferenceService } from '../resources/services/store-preference/store-preference.service';
@Component({
  selector: 'app-store-preference-list',
  templateUrl: './store-preference-list.component.html',
  styleUrls: ['./store-preference-list.component.css'],
})
export class StorePreferenceListComponent implements OnInit {
  storesPreference: Array<StorePreference> = [];
  alert = {
    title: 'Lojas não localizadas',
    subtitle: 'Utilize o botão abaixo para adicionar suas lojas preferidas',
  };
  constructor(private storePreferenceService: StorePreferenceService) {}

  ngOnInit(): void {}

  public getListPreference(): void {
    //precisamos do token e cpf
    this.storePreferenceService.getStorePreference('0').subscribe(
      (data) => {
        this.storesPreference = data;
      },
      (httpError) => {
        this.alert.subtitle =
          httpError.error.message || 'Error na comunicação com o servidor';
        console.log(httpError.error);
      }
    );
  }
}
