import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Injectable()
export class SignupServiceService {

  constructor(public http: HttpClient, private router: Router) { 
  
  }

  signupUser(user) {
    
    return this.http.post('/user', user).subscribe(
      res => {
        console.log("Data in response: "+res); 
        this.router.navigate(['/movie']);
      }, 
      error => {console.log("My error: "+error); 
    });
  }

}
