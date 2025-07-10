import { Movie } from '../interfaces/movie.interface';
import { createReducer, on } from '@ngrx/store';
import { addMovie, deleteMovie, filterByGenre, toggleWatched } from './movie.action';

export interface MovieState {
  movies: Movie[];
  filter: 'All' | 'Watched' | 'Unwatched' | string;
}

const initialState: MovieState = {
  movies: [],
  filter: 'All'
};

export const movieReducer = createReducer(
  initialState,

  on(addMovie, (state, { movie }) => ({
    ...state,
    movies: [...state.movies, movie]
  })),
  on(deleteMovie, (state, { movieId }) => ({
    ...state,
    movies: state.movies.filter((movie) => movie.id !== movieId)
  })),
  on(toggleWatched, (state, { movieId }) => ({
    ...state,
    movies: state.movies.map((movie) =>
      movie.id === movieId ? { ...movie, watched: !movie.watched } : movie
    )
  })),
  on(filterByGenre, (state, { genre }) => ({
    ...state,
    filter: genre
  }))
);
