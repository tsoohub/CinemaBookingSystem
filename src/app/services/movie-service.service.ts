import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieServiceService {

  constructor(public http: HttpClient, private router: Router) { }
  
  getMovieById(id){
    return this.http.get('http://localhost:3000/movie/'+id);
  }
  getAllMovies() {
    return this.http.get('http://localhost:3000/movie');
  }
}
