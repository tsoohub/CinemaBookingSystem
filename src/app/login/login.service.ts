import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {

  }
  login(credentials) {
    this.http.post('http://localhost:3000/login', credentials).subscribe(
      res => {
        res=>res.json();
        res=>localStorage.setItem('id_token',res);
        error=>console.log(error);
      });
  }
  loggedIn(){
      return tokenNotExpired();
  }
  logout(){
    localStorage.removeItem('id_token');
  }

}
