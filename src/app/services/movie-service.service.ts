import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieServiceService {

  constructor(public http: HttpClient, private router: Router) { }
  url:String ="http://localhost:3000";

  getMovieById(id){
    return this.http.get(this.url+'/movie/'+id);
  }
  getAllMovies() {
    return this.http.get(this.url+'/movie');
  }

  insertMovie(movie) {
    console.log(movie);
    // return this.http.post('https://cinema-booking-demo.herokuapp.com/movie', movie);
    return this.http.post(this.url+'/movie', movie);
  }

  deleteMovie(id) {
    return this.http.delete(this.url+'/movie/'+id);
  }
}
