import { IMovie } from './imovie';
import { ADD_MOVIE, REMOVE_MOVIE, REMOVE_ALL_MOVIES } from './actions';

/* App State of Movie Redux */
export interface IAppState {
    movies: IMovie[];
    lastUpdate: Date;
}

/* Initial state of Movie app */
export const INITIAL_STATE: IAppState = {
    movies: [],
    lastUpdate: null
}

/* Redux store and reducer created by Tsoodol 02/04/2018 */ 
export function rootReducer(state, action) {
    // Reducer Logic to add, remove movies.
    switch (action.type) {
        case ADD_MOVIE:
            action.movie.id = state.movies.length + 1;    
            return Object.assign({}, state, {
                movies: state.movies.concat(Object.assign({}, action.movie)),
                lastUpdate: new Date()
            })
        case REMOVE_MOVIE:
            return Object.assign({}, state, {
                movies: state.movies.filter(t => t.id !== action.id),
                lastUpdate: new Date()
            })
        case REMOVE_ALL_MOVIES:
            return Object.assign({}, state, {
                movies: [],
                lastUpdate: new Date()
            })
    }
    return state;
}