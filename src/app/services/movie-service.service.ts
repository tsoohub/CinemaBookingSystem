import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Globals } from '../globals';

@Injectable()
export class MovieServiceService {

  /* created by Tsoodol 02/06/2018 
     Movie Service to CRUD in MongoDB
     Send request to movie url to Node JS */
  constructor(public http: HttpClient, private router: Router,private gl:Globals) { }


  getMovieById(id){
    return this.http.get(this.gl.URL+'/movie/'+id);
  }
  getAllMovies() {
    return this.http.get(this.gl.URL+'/movie');
  }

  insertMovie(movie) {
    console.log(movie);
    // return this.http.post('https://cinema-booking-demo.herokuapp.com/movie', movie);
    return this.http.post(this.gl.URL+'/movie', movie);
  }

  deleteMovie(id) {
    console.log("service id",id);
    return this.http.delete(this.gl.URL+'/movie/'+id);
  }
}
