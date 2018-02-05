import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TicketOrderComponent } from './ticket-order/ticket-order.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AuthGuard } from './guard/auth.guard';
import { MovielistComponent } from './movielist/movielist.component';



const MY_ROUTES: Routes = [

    { path: '', component: WelcomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'unauthorized', component: UnauthorizedComponent },
    {
        path: 'movie', component: MovielistComponent,
    },
    { path: 'movie/ticket/:movieId', component: TicketOrderComponent, canActivate:[AuthGuard]},
    { path: 'logout', redirectTo: '/logout' },
    { path: '**', redirectTo: '/' },
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);