import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  /* Welcome page created by Tsoodol 02/02/2018 */ 
  constructor(private auth: LoginService) { }

  ngOnInit() {

  }

  isLoggedIn(){
    return this.auth.loggedIn();
  }
  
}