import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieServiceService {

  constructor(public http: HttpClient, private router: Router) { }
  
  getMovieById(id){
    return this.http.get('http://cinema-booking-demo.herokuapp.com/movie/'+id);
  }
  getAllMovies() {
    return this.http.get('http://cinema-booking-demo.herokuapp.com/movie');
  }

  insertMovie(movie) {
    return this.http.post('http://cinema-booking-demo.herokuapp.com/movie', movie);
  }

  deleteMovie(id) {
    return this.http.delete('http://cinema-booking-demo.herokuapp.com/movie/'+id);
  }
}
