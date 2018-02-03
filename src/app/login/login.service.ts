import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {

  }
  login(credentials) {
    this.http.post('http://localhost:3000/login', credentials).subscribe(
      function (res) {
        res => res.json();
        localStorage.setItem('id_token', JSON.stringify(res));
      })
  }
  loggedIn() {
    // console.log('token_Id' + localStorage.getItem('id_token'));
    return tokenNotExpired('id_token');
  }
  logout() {
    localStorage.removeItem('id_token');
  }

}
