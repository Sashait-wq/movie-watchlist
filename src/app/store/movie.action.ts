import { createAction, props } from '@ngrx/store';
import { Movie } from '../interfaces/movie.interface';

enum MovieAction {
  ADD_MOVIE = '[Movie] Create Movie',
  DELETE_MOVIE = '[Movie] Delete Movie',
  TOGGLE_WATCHED = '[Movie] Toggle Watched',
  FILTER_BY_GENRE = '[Movie] Filter By Genre'
}

export const addMovie = createAction(MovieAction.ADD_MOVIE, props<{ movie: Movie }>());
export const deleteMovie = createAction(MovieAction.DELETE_MOVIE, props<{ movieId: number }>());
export const toggleWatched = createAction(MovieAction.TOGGLE_WATCHED, props<{ movieId: number }>());
export const filterByGenre = createAction(MovieAction.FILTER_BY_GENRE, props<{ genre: string }>());
