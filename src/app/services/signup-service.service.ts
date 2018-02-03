import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignupServiceService {

  constructor(public http: HttpClient) { 
  
  }

  signupUser(user) {
    console.log(user);
    return this.http.post('/signup', user).subscribe(
      res => {console.log(res); }, 
      error => {console.log(error); 
    });
  }
}
