import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { TicketOrderComponent } from './ticket-order/ticket-order.component';
import { myRoutes } from './app.routes';
import { LoginService } from './login/login.service';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guard/auth.guard';

// import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    TicketOrderComponent,
    UnauthorizedComponent
    // SignupComponent
  ],
  imports: [
    BrowserModule,
    myRoutes,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, AuthHttp,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
