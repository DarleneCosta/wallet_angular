import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { RequestSignUp } from '../resources/models/sign-up/RequestSignUp';
import { SignUpService } from '../resources/services/sign-up/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public signUpForm!: UntypedFormGroup;
  public requestSignUp!: RequestSignUp;

  constructor(private router: Router, private signUpService: SignUpService) {}
  msgError: string = '';
  ngOnInit(): void {
    this.requestSignUp = new RequestSignUp();
    this.signUpForm = new UntypedFormGroup({
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
    return this.signUpForm.get('name')!;
  }
  get birthDate() {
    return this.signUpForm.get('birthDate')!;
  }
  get cpf() {
    return this.signUpForm.get('cpf')!;
  }
  get email() {
    return this.signUpForm.get('email')!;
  }
  get cellphone() {
    return this.signUpForm.get('cellphone')!;
  }
  get password() {
    return this.signUpForm.get('password')!;
  }

  onSubmit(): void {
    if (this.signUpForm.invalid) return;
    this.requestSignUp = this.signUpForm.value;
    console.log(this.requestSignUp);
    this.signUpService.doSignUp(this.requestSignUp).subscribe(
      (data) => {
        this.router.navigate(['signIn']);
      },
      (httpError) => {
        this.msgError = httpError.error.message || 'Error ao conectar';
        console.log(httpError.error);
      }
    );
  }
}
