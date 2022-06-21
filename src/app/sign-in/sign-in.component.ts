import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestSignIn } from '../resources/models/sign-in/RequestSignIn';
import { SignInService } from '../resources/services/sign-in/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  public requestSignIn!: RequestSignIn;
  msgError: string = '';

  constructor(private signInService: SignInService, private router: Router) {}

  ngOnInit(): void {
    this.requestSignIn = new RequestSignIn();
  }

  public doLogin(): void {
    this.signInService.doLogin(this.requestSignIn).subscribe(
      (data) => {
        this.router.navigate(['dashboard']);
      },
      (httpError) => {
        this.msgError = httpError.error.message || 'Error ao conectar';
        console.log(httpError.error);
        //this.router.navigate(['dashboard']);
      }
    );
  }
}
