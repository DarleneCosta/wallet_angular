import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from './../../resources/services/authenticate/authenticate.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private authService: AuthenticateService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    try {
      if (this.authService.isAuthenticated()) {
        this.router.navigate(['dashboard']);
      }
    } finally {
      this.spinner.hide();
    }
  }
}
