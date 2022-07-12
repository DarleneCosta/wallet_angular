import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { User } from './../../resources/models/user/User';
import { UserService } from './../../resources/services/user/user.service';
import { AuthenticateService } from './../../resources/services/authenticate/authenticate.service';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from 'moment';
import { AlertService } from './../../resources/services/alert/alert.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public form!: UntypedFormGroup;
  public user!: User;

  constructor(
    private router: Router,
    private authService: AuthenticateService,
    private userService: UserService,
    private spinner: NgxSpinnerService,
    private showAlert: AlertService
  ) {}
  msgError: string = '';
  ngOnInit(): void {
    this.user = new User();
    this.form = new UntypedFormGroup({
      name: new UntypedFormControl('', [Validators.required]),
      birthDate: new UntypedFormControl('', [Validators.required]),
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.email,
      ]),
      cpf: new UntypedFormControl('', [Validators.required]),
      cellphone: new UntypedFormControl('', [Validators.required]),
      password: new UntypedFormControl('', [
        Validators.required,
        Validators.min(6),
      ]),
    });
  }

  get name() {
    return this.form.get('name')!;
  }
  get birthDate() {
    return this.form.get('birthDate')!;
  }
  get cpf() {
    return this.form.get('cpf')!;
  }
  get email() {
    return this.form.get('email')!;
  }
  get cellphone() {
    return this.form.get('cellphone')!;
  }
  get password() {
    return this.form.get('password')!;
  }

  async onSubmit() {
    if (this.form.invalid) return;
    this.spinner.show();
    try {
      const birthDate = moment(this.form.value.birthDate);
      if (!birthDate.isValid()) {
        this.showAlert.error('Data de nascimento não é válida.');
        return;
      }
      this.user = this.form.value;
      this.user.birthDate = birthDate.format('DD-MM-YYYY');
      this.user.cellphone = parseInt(this.form.value.cellphone);
      this.user.sendNotification = false;
      await this.userService.createUser(this.user);
      await this.authService.doSignIn({
        username: this.user.cpf,
        password: this.user.password,
      });
    } catch (err: any) {
      this.msgError = (err.error && err.error.message) || 'Error ao conectar';
      console.log(err);
    } finally {
      this.spinner.hide();
    }
  }
}
