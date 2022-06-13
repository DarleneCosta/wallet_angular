import { RequestSignIn } from './../resoruces/models/RequestSignIn';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  public requestSignIn!: RequestSignIn;

  constructor() {}

  ngOnInit(): void {
    this.requestSignIn = new RequestSignIn();
  }

  public doLogin(): void {
    console.log(this.requestSignIn);
  }
}
