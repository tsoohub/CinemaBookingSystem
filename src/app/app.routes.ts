import {RouterModule, Routes} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';



const MY_ROUTES: Routes = [

    {path: '', component: WelcomeComponent},
    {path: 'signup', component: SignupComponent},
    {path: '**', redirectTo: '/' },
    
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);