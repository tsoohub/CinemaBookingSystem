import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../redux/store';
import { REMOVE_ALL_MOVIES } from '../redux/actions';

@Component({
  selector: 'app-movieoverview',
  templateUrl: './movieoverview.component.html',
  styleUrls: ['./movieoverview.component.css']
})
export class MovieoverviewComponent implements OnInit {

  @select() movies;
  @select() lastUpdate;
  /* Tsoodol 02/04/2018
     Overfiew component responsible for managin all movies.
  */ 
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    
  }

  clearMovies() {
    this.ngRedux.dispatch({type: REMOVE_ALL_MOVIES});
  }
}
