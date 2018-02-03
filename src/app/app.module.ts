import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { TicketOrderComponent } from './ticket-order/ticket-order.component';
import { myRoutes } from './app.routes';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    TicketOrderComponent
    WelcomeComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    myRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
