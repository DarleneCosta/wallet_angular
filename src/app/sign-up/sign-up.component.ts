import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { RequestSignUp } from '../resources/models/sign-up/RequestSignUp';
import { SignUpService } from '../resources/services/sign-up/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public requestSignUp!: RequestSignUp;

  constructor(
    private signUpService: SignUpService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  signUpForm = this.formBuilder.group({
    name: '',
    bithDate: '',
    email: '',
    cpf: '',
    celphone: 0,
    password: '',
  });
  ngOnInit(): void {
    this.requestSignUp = new RequestSignUp();
  }

  onSubmit(): void {
    this.requestSignUp = this.signUpForm.value;
    this.signUpService.doSignUp(this.requestSignUp).subscribe(
      (data) => {
        this.router.navigate(['signIn']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
