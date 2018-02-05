import { IMovie } from './imovie';
import { ADD_MOVIE, REMOVE_MOVIE, REMOVE_ALL_MOVIES, TOGGLE_MOVIE } from './actions';

export interface IAppState {
    movies: IMovie[];
    lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
    movies: [],
    lastUpdate: null
}

export function rootReducer(state, action) {
    switch (action.type) {
        case ADD_MOVIE:
            action.movie.id = state.movies.length + 1;    
            return Object.assign({}, state, {
                movies: state.movies.concat(Object.assign({}, action.movie)),
                lastUpdate: new Date()
            })
        
        case TOGGLE_MOVIE:
            var movie = state.movies.find(t => t.id === action.id);
            var index = state.movies.indexOf(movie);
            return Object.assign({}, state, {
                movies: [
                    ...state.movies.slice(0, index),
                    Object.assign({}, movie, {isCompleted: !movie.isCompleted}),
                    ...state.movies.slice(index+1)
                ],
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