import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder } from '@angular/forms';
import { LoginService } from './login.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(fb:FormBuilder,private loginService:LoginService) { 
    this.loginForm = fb.group({
      'username':["",[Validators.required]],
      'password':["",[Validators.required, this.passwordCheck]]
    });
  }

  passwordCheck(){
    return true;
  }
  ngOnInit() {
  }

  onSubmit(){
    const val =this.loginForm.value;
    console.log(this.loginForm.value);
    this.loginService.login(val);
  }
}