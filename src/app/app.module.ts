import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { TicketOrderComponent } from './ticket-order/ticket-order.component';
import { myRoutes } from './app.routes';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupServiceService } from './services/signup-service.service';

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
    ReactiveFormsModule,
    HttpClientModule,
    myRoutes
  ],
  providers: [SignupServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
