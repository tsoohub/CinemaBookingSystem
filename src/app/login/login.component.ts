import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

/* Molomjamts - 02/03/2018
creating loginForm with loginControls (username and password) */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = fb.group({
      'username': ["", [Validators.required]],
      'password': ["", [Validators.required, this.passwordCheck]]
    });
  }

  passwordCheck() {
    return true;
  }
  ngOnInit() {
  }

  /* Molomjamts - 02/03/2018
  when submit button clicked, this function will be called.
  it will take username and password from the login form and 
  calls the login service with credentials. 
   */
  onSubmit() {
    const val = this.loginForm.value;
    console.log(this.loginForm.value);
    this.loginService.login(val);
    if (this.loginService.loggedIn) {
      this.router.navigateByUrl('/movie');
    }

  }
}
