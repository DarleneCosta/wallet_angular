import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { ResponseSignIn } from './../resources/models/sign-in/ResponseSignIn';
import { RequestSignIn } from '../resources/models/sign-in/RequestSignIn';
import { SignInService } from './../resources/services/sign-in/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  public form!: UntypedFormGroup;
  public requestSignIn!: RequestSignIn;

  constructor(private signInService: SignInService, private router: Router) {}
  msgError: string = '';

  ngOnInit(): void {
    this.requestSignIn = new RequestSignIn();
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

  public async doSignIn() {
    if (this.form.invalid) return;
    try {
      this.requestSignIn = this.form.value;
      await this.signInService.doSignIn(this.requestSignIn);
    } catch (err: any) {
      this.msgError = err.error.message || 'Error ao conectar';
      console.log(err.error);
    }
  }
}

//  this.requestSignIn = this.signInForm.value;
//  this.signInService.doSignIn(this.requestSignIn).subscribe(
//    (data: ResponseSignIn) => {
//      this.router.navigate(['dashboard']);
//    },
//    (httpError: any) => {
//      this.msgError = httpError.error.message || 'Error ao conectar';
//      console.log(httpError.error);
//      this.router.navigate(['dashboard']);
//    }
//  );
