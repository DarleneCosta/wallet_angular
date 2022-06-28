import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { AuthenticateService } from './../../resources/services/authenticate/authenticate.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  public form!: UntypedFormGroup;

  constructor(
    private authService: AuthenticateService,
    private router: Router
  ) {}
  msgError: string = '';

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      cpf: new UntypedFormControl('', [Validators.required]),
      password: new UntypedFormControl('', [Validators.required]),
    });
  }

  get cpf() {
    return this.form.get('cpf')!;
  }
  get password() {
    return this.form.get('password')!;
  }

  public async doSignIn(): Promise<void> {
    if (this.form.invalid) return;
    try {
      await this.authService.doSignIn(this.form.value);
    } catch (err: any) {
      this.msgError = err.error.message || 'Error ao conectar';
      console.log(err.error);
    }
  }
}
