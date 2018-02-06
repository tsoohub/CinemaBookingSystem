import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieServiceService {
  /* created by Tsoodol 02/06/2018 
     Movie Service to CRUD in MongoDB
     Send request to movie url to Node JS */
  constructor(public http: HttpClient, private router: Router) { }
  
  getMovieById(id){
    return this.http.get('https://cinema-booking-demo.herokuapp.com/movie/'+id);
  }
  getAllMovies() {
    return this.http.get('https://cinema-booking-demo.herokuapp.com/movie');
  }

  insertMovie(movie) {
    return this.http.post('https://cinema-booking-demo.herokuapp.com/movie', movie);
  }

  deleteMovie(id) {
    return this.http.delete('https://cinema-booking-demo.herokuapp.com/movie/'+id);
  }
}
