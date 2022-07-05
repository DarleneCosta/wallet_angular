import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-add-preferences',
  templateUrl: './add-preferences.component.html',
  styleUrls: ['./add-preferences.component.css'],
})
export class AddPreferencesComponent implements OnInit {
  faPlus = faPlus;
  dialog: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  openDialog(): void {
    this.dialog = true;
  }
  closeDialog(): void {
    this.dialog = false;
  }
}
