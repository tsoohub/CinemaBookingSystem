import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../redux/store';
import { ADD_MOVIE, REMOVE_MOVIE } from '../redux/actions';
import { IMovie } from '../redux/imovie';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { MovieServiceService } from '../services/movie-service.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-moviecrud',
  templateUrl: './moviecrud.component.html',
  styleUrls: ['./moviecrud.component.css']
})

export class MoviecrudComponent implements OnInit, OnDestroy {

  @select() movies;
  movieForm: FormGroup;
  mymovies: any;
  schedule:any;
  subscription: Subscription;
  movietimes: Array<String> = ["12:00", "15:00", "17:00", "21:00"];

  /*Created by Tsoodol 02/04/2018
    This component's responsible for create, delete movie from Redux & MongoDB
    Movie crud in mongoDB */ 
  constructor(private fb: FormBuilder, private ngRedux: NgRedux<IAppState>, private movieService: MovieServiceService) { 
    this.movieForm = fb.group({
      'name': ['', [Validators.required]],
      'decs': ['', [Validators.required]],
      'genre': ['', [Validators.required]],
      'img': ['', [Validators.required]],
      'adult': ['', [Validators.required]],
      'child': ['', [Validators.required]],
      'schedule': fb.array(
        ['startTime', Validators.required],
      )  
    });
  }

  get formSchedule() { return <FormArray>this.movieForm.get('schedule'); }

  /* Add new time control to current movie */
  onAddTime() {
    (<FormArray>this.movieForm.controls['schedule']).push(new FormControl('', Validators.required));
  }

  /* When application first run, it will add program states to redux store */
  ngOnInit() {
      if(this.ngRedux.getState().movies.length ==0) {
        /* When component initializing, i add all movies to Redux store. */
        this.subscription = this.movieService.getAllMovies().subscribe(movie => {
          for(let i in movie) {
            this.ngRedux.dispatch({type: ADD_MOVIE, movie: movie[i]});
          }
        });
      }
  }

  ngOnDestroy() {
    if(this.subscription!==undefined)
    this.subscription.unsubscribe();
  }

  onSubmit() {
    let movie = this.movieForm.value;
    /* Add seats to time */
    movie.schedule = movie.schedule.map(function (value, label) {return {'startTime': value, 'totalSeat': 50};});
    /* Add movie to MongoDB */ 
    this.subscription = this.movieService.insertMovie(movie).subscribe(res => {
      /* Add movie to Redux Store */
      this.ngRedux.dispatch({type: ADD_MOVIE, movie: res});
    });
    
  }
  removeMovie(movie) {
    console.log("delete movie", movie);
    let id = movie._id;
    /* Here, i removing movie from Redux store and mongoDB */
    this.ngRedux.dispatch({type: REMOVE_MOVIE, id: movie.id });
    this.subscription = this.movieService.deleteMovie(id).subscribe(res => {});
  }

}
