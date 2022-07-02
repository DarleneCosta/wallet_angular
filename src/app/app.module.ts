import { DashboardModule } from './views/dashboard/dashboard.module';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { AddPreferencesComponent } from './views/add-preferences/add-preferences.component';
import { TopBarComponent } from './views/top-bar/top-bar.component';
import { StorePreferenceListComponent } from './views/store-preference-list/store-preference-list.component';
import { AlertLabelComponent } from './views/alert-label/alert-label.component';
import { InterceptorService } from './resources/services/interceptor/interceptor.service';
import { AuthenticateGuard } from './resources/guard/authenticate.guard';
import { BalanceWalletComponent } from './views/balance-wallet/balance-wallet.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    AddPreferencesComponent,
    TopBarComponent,
    StorePreferenceListComponent,
    AlertLabelComponent,
    BalanceWalletComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'signIn', component: SignInComponent },
      { path: 'signUp', component: SignUpComponent },
      {
        path: 'dashboard',
        canActivate: [AuthenticateGuard],
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ]),
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false,
    }),
    NgxSpinnerModule.forRoot({ type: 'ball-spin' }),
  ],
  providers: [
    {
      provide: 'URL_API',
      useValue: environment.apiUrl,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
