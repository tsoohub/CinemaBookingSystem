import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../redux/store';
import { ADD_MOVIE, REMOVE_MOVIE, TOGGLE_MOVIE } from '../redux/actions';
import { IMovie } from '../redux/imovie';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";

@Component({
  selector: 'app-moviecrud',
  templateUrl: './moviecrud.component.html',
  styleUrls: ['./moviecrud.component.css']
})

export class MoviecrudComponent implements OnInit {

  @select() movies;
  movieForm: FormGroup;
  constructor(private fb: FormBuilder, private ngRedux: NgRedux<IAppState>) { 
    this.movieForm = fb.group({
      'name': ['', [Validators.required]],
      'decs': ['', [Validators.required]],
      'genre': ['', [Validators.required]],
      'img': ['', [Validators.required]],
      'adult': ['', [Validators.required]],
      'child': ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    let val = this.movieForm.value;
    console.log("Before:  "+val);
    this.ngRedux.dispatch({type: ADD_MOVIE, movie: val});
    console.log("After:   "+this.ngRedux.getState());
  }
  toggleMovie(movie) {
    this.ngRedux.dispatch({ type: TOGGLE_MOVIE, id: movie.id });
  }
  removeMovie(movie) {
    this.ngRedux.dispatch({type: REMOVE_MOVIE, id: movie.id });
  }
}
