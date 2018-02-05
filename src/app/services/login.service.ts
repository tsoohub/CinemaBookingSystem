import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs'
import { RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private router: Router) {

  }
  login(credentials) {
    this.http.post('http://localhost:3000/login', credentials, { headers: { 'Content-Type': 'application/json' } }).subscribe(

      data => this.saveData(data),
      error => {
        console.log(" error: " + error);
        this.router.navigateByUrl('/login');
      }
    )

  }
  private saveData(data) {
    localStorage.setItem('id_token', data.token);
    console.log('id_token:::', data.token);
    console.log('id_token:::', data.loggedUser);
    localStorage.setItem("user", JSON.stringify(data.loggedUser));
  }
  loggedIn() {
    // console.log('token_Id' + localStorage.getItem('id_token'));
    return tokenNotExpired('id_token');
  }
  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('user');
  }

}
