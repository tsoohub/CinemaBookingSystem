import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit, OnDestroy {

  /* Tsoodol 02/06/2018
     Display list of movies from the MongoDB movies collection.
     When user clicks on the movie, it will jump into order component.
  */ 
  constructor(private http: MovieServiceService) { }

  movies: any;
  schedule:any;
  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.http.getAllMovies().subscribe(movie => {
      this.movies = movie;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
