import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieState } from './movie.reducer';

const selectMovieFeature = createFeatureSelector<MovieState>('movies');
export const selectMovie = createSelector(selectMovieFeature, (state) => state.movies);
