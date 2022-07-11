import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from './../../../resources/services/authenticate/authenticate.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  constructor(
    private authService: AuthenticateService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  signOut(): void {
    this.authService.logOut();
    this.router.navigate(['signIn']);
  }
}
