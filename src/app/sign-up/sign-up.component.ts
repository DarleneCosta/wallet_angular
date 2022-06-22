import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RequestSignUp } from '../resources/models/sign-up/RequestSignUp';
import { SignUpService } from '../resources/services/sign-up/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public signUpForm!: FormGroup;

  constructor(private router: Router) {}
  msgError: string = '';
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      birthDate: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      cpf: new FormControl(''),
      cellphone: new FormControl(''),
      password: new FormControl(''),
    });
  }

  get name() {
    return this.signUpForm.get('name')!;
  }
  get email() {
    return this.signUpForm.get('email')!;
  }

  onSubmit(): void {
    if (this.signUpForm.invalid) return;
    //  this.requestSignUp = this.signUpForm.value;
    // this.signUpService.doSignUp(this.signUpForm).subscribe(
    //   (data) => {
    //     this.router.navigate(['signIn']);
    //   },
    //   (httpError) => {
    //     this.msgError = httpError.error.message || 'Error ao conectar';
    //     console.log(httpError.error);
    //   }
    // );
  }
}
