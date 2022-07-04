import { Component, Input } from '@angular/core';
//import { StorePreference } from './../../resources/models/store-preference/StorePreference';

@Component({
  selector: 'app-store-preference-list',
  templateUrl: './store-preference-list.component.html',
  styleUrls: ['./store-preference-list.component.css'],
})
export class StorePreferenceListComponent {
  @Input() storesPreference: Array<any> = [];
  @Input() msgError: string = '';
  alert = {
    title: 'Lojas não localizadas',
    subtitle: 'Utilize o botão abaixo para adicionar suas lojas preferidas',
  };
}
