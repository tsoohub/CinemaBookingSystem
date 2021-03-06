import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Globals } from '../globals';

@Injectable()
export class SignupServiceService implements OnDestroy {
  /* created by Tsoodol 02/06/2018
    Signup Service to CRUD in MongoDB
    Send POST request to user url to Node JS, 
    navigate into the movie page */
  subscribe: Subscription;
  constructor(public http: HttpClient, private router: Router,private gl:Globals) {

  }

  signupUser(user) {

    this.subscribe = this.http.post(this.gl.URL+'/user', user, { headers: { 'Content-Type': 'application/json' } }).subscribe(
      data => {
        this.saveData(data);
        this.router.navigate(['/movie']);
      },
      error => {
        console.log(" error: " + error);
        this.router.navigateByUrl('/login');
      }
    );

  }

  private saveData(data) {
    console.log('data: ' + data);
    localStorage.setItem('id_token', data.token);
    console.log('id_token:::', data.token);
    console.log('id_token:::', data.loggedUser);
    localStorage.setItem("user", JSON.stringify(data.loggedUser));
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
