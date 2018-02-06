import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Router } from '@angular/router';
import { SignupServiceService } from '../services/signup-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  /* Tsoodol 02/03/2018
     This component is responsible for registering new user.
     This will validate user information first send to the Node Application
  */ 
  constructor(private fb: FormBuilder, private http: SignupServiceService, private router: Router) {
    this.signupForm = fb.group({
      'firstname': ['', [Validators.required]],
      'lastname': ['', [Validators.required]],
      'username': ['', [Validators.required]],
      'email': ['', [Validators.required]],
      'phone': ['', [Validators.required]],
      'password': ['', [Validators.required]],
    });
  }

  emailValidator(control: FormControl): {[s: string]: boolean} {

    if(control.value.length < 2) {
      return {'Email length is too short': true};
    }
    return null;
  }

  ngOnInit() {
  }

  onSubmit() {
    // Save user information to the Database.
    this.http.signupUser(this.signupForm.value);
    
  }
}
