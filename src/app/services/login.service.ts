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
  /* Molomjamts -02/03/2018 
  Login. Sending login request to express application
  if login is successful, it will call the saveData function, 
  otherwise, will navigate to login page*/
  login(credentials) {
    this.http.post('http://cinema-booking-demo.herokuapp.com/login', credentials, { headers: { 'Content-Type': 'application/json' } }).subscribe(
      data => {
        this.saveData(data);
        console.log('dddd',data);
        this.router.navigateByUrl('/movie');
      },
      error => {
        console.log(" error: " + error);
        this.router.navigateByUrl('/login');
      }
    )

  }
  /* Molomjamts - 02/04/2018
   if user successfully logged in, this function will be called
   it will save tokenId and User information to localstorage */
  private saveData(data) {
    localStorage.setItem('id_token', data.token);
    console.log('id_token:::', data.token);
    console.log('id_token:::', data.loggedUser);
    localStorage.setItem("user", JSON.stringify(data.loggedUser));
  }

  /* Molomjamts - 02/03/2018
  it is used to check if user logged in or not.
  the function will return true if the user is logged in.
  otherwise return false.
  */
  loggedIn() {
    // console.log('token_Id' + localStorage.getItem('id_token'));
    return tokenNotExpired('id_token');
  }

  /* Molomjamts - 02/03/2018 
  Logout function. it will remove token ID and user information 
  from the localstorage when user is logged out.
  */
  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('user');
  }

}
