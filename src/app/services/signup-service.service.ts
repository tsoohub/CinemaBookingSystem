import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Injectable()
export class SignupServiceService implements OnDestroy{

  subscribe: Subscription;
  constructor(public http: HttpClient, private router: Router) { 
  
  }

  signupUser(user) {
    
    this.subscribe = this.http.post('/user', user).subscribe(
      function (res) {
        res => res.json();
        localStorage.setItem('id_token', JSON.stringify(res));
      }
    );
    this.router.navigate(['/movie']);
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
