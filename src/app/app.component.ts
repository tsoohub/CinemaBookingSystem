import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private auth:LoginService,private router:Router){
    
  }

  isLoggedIn(){
    return this.auth.loggedIn();
  }

  logout(){
    console.log('logging out');
      this.auth.logout();
      this.router.navigateByUrl('login');
  } 
  
}
