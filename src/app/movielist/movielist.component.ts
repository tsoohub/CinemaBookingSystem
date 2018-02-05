import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  constructor(private http: MovieServiceService) { }

  movies: any;
  schedule:any;

  ngOnInit() {
    this.http.getAllMovies().subscribe(movie => {
      this.movies = movie;
    });
  }

}
