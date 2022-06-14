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

  constructor(private signInService: SignInService, private router: Router) {}

  ngOnInit(): void {
    this.requestSignIn = new RequestSignIn();
  }

  public doLogin(): void {
    this.router.navigate(['dashboard']);

    // this.signInService.doLogin(this.requestSignIn).subscribe(
    //   (data) => {
    //     this.router.navigate(['dashboard']);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
}
