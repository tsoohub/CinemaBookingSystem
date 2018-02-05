import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { TicketOrderComponent } from './ticket-order/ticket-order.component';
import { myRoutes } from './app.routes';
import { LoginService } from './services/login.service';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AuthGuard } from './guard/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { SignupServiceService } from './services/signup-service.service';
import { SignupComponent } from './signup/signup.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MovieServiceService } from './services/movie-service.service';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { TicketOrderService } from './services/ticket-order.service';

import { IAppState, rootReducer, INITIAL_STATE } from './redux/store';
import { MovieoverviewComponent } from './movieoverview/movieoverview.component';
import { MoviecrudComponent } from './moviecrud/moviecrud.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    TicketOrderComponent,
    UnauthorizedComponent,
    SignupComponent,
    MovielistComponent,
    MovieoverviewComponent,
    MoviecrudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgReduxModule,
    myRoutes
  ],
  providers: [SignupServiceService, LoginService, AuthHttp, AuthGuard, MovieServiceService, TicketOrderService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor (ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
