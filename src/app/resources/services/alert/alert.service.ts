import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  private showAlert(
    icon: SweetAlertIcon,
    message: string,
    title?: string
  ): void {
    Swal.fire(title, message, icon);
  }

  public success(message: string, title?: string): void {
    this.showAlert('success', message, title);
  }

  public error(message: string, title?: string): void {
    this.showAlert('error', message, title);
  }

  public info(message: string, title?: string): void {
    this.showAlert('info', message, title);
  }
}
