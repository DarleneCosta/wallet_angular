import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { AuthenticateService } from './../../resources/services/authenticate/authenticate.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  form!: UntypedFormGroup;
  msgError: string = '';

  constructor(
    private authService: AuthenticateService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      username: new UntypedFormControl('', [Validators.required]),
      password: new UntypedFormControl('', [Validators.required]),
    });
  }

  get username() {
    return this.form.get('username')!;
  }
  get password() {
    return this.form.get('password')!;
  }

  async doSignIn(): Promise<void> {
    if (this.form.invalid) return;
    this.spinner.show();
    try {
      await this.authService.doSignIn(this.form.value);
      if (this.authService.isAuthenticated()) {
        this.router.navigate(['dashboard']);
      }
    } catch (err: any) {
      this.msgError = err.error.message || 'Error ao conectar';
      console.log(err.error);
    } finally {
      this.spinner.hide();
    }
  }
}
