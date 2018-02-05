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
    
    this.subscribe = this.http.post('http://localhost:3000/user', user, { headers: { 'Content-Type': 'application/json' } } ).subscribe(
      data => this.saveData(data),
      error => {
        console.log(" error: " + error);
        this.router.navigateByUrl('/login');
      }
    );
    this.router.navigate(['/movie']);
  }

  private saveData(data) {
    console.log('data: '+data);
    localStorage.setItem('id_token', data.token);
    console.log('id_token:::', data.token);
    console.log('id_token:::', data.loggedUser);
    localStorage.setItem("user", JSON.stringify(data.loggedUser));
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
