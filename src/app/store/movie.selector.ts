import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieState } from './movie.reducer';

const selectMovieFeature = createFeatureSelector<MovieState>('movies');
export const selectMovie = createSelector(selectMovieFeature, (state) => state.movies);
export const selectFilteredMovies = createSelector(selectMovieFeature, (state) => {
  const { movies, filter } = state;

  if (filter === 'All') return movies;
  if (filter === 'Watched') return movies.filter((movie) => movie.watched);
  if (filter === 'Unwatched') return movies.filter((movie) => !movie.watched);

  return movies.filter((movie) => movie.genre.toLowerCase() === filter.toLowerCase());
});
