import { IMovie } from './imovie';
import { ADD_MOVIE, REMOVE_MOVIE, REMOVE_ALL_MOVIES } from './actions';

export interface IAppState {
    movies: IMovie[];
    lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
    movies: [],
    lastUpdate: null
}

export function rootReducer(state, action) {
    // Reducer Logic
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