import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { RequestSignIn } from '../resources/models/sign-in/RequestSignIn';
import { SignInService } from '../resources/services/sign-in/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  public signInForm!: UntypedFormGroup;
  public requestSignIn!: RequestSignIn;

  constructor(private signInService: SignInService, private router: Router) {}
  msgError: string = '';

  ngOnInit(): void {
    this.requestSignIn = new RequestSignIn();
    this.signInForm = new UntypedFormGroup({
      cpf: new UntypedFormControl('', [Validators.required]),
      password: new UntypedFormControl('', [Validators.required]),
    });
  }

  get cpf() {
    return this.signInForm.get('cpf')!;
  }
  get password() {
    return this.signInForm.get('password')!;
  }

  public doLogin(): void {
    if (this.signInForm.invalid) return;
    this.requestSignIn = this.signInForm.value;
    this.signInService.doLogin(this.requestSignIn).subscribe(
      (data) => {
        this.router.navigate(['dashboard']);
      },
      (httpError) => {
        this.msgError = httpError.error.message || 'Error ao conectar';
        console.log(httpError.error);
        this.router.navigate(['dashboard']);
      }
    );
  }
}
