import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MovieFormComponent } from '../movie-form/movie-form.component';
import { Store } from '@ngrx/store';
import { selectFilteredMovies, selectMovie } from '../../store/movie.selector';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { Movie } from '../../interfaces/movie.interface';
import { addMovie, deleteMovie, filterByGenre, toggleWatched } from '../../store/movie.action';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FilterButtonsComponent } from '../../components/filter-buttons/filter-buttons.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-list-page',
  imports: [
    HeaderComponent,
    MovieFormComponent,
    MovieListComponent,
    AsyncPipe,
    CommonModule,
    FilterButtonsComponent
  ],
  templateUrl: './movie-list-page.component.html',
  styleUrl: './movie-list-page.component.scss'
})
export class MovieListPageComponent {
  private store = inject(Store);
  private snackBar = inject(MatSnackBar);

  public selectFilteredMovies$ = this.store.select(selectFilteredMovies);
  public selectMovie$ = this.store.select(selectMovie);

  public onAddMovie(movie: Movie): void {
    this.store.dispatch(addMovie({ movie }));

    this.snackBar.open('Movie added!', 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
  }

  public onDeleteMovie(movieId: number): void {
    this.store.dispatch(deleteMovie({ movieId }));

    this.snackBar.open('The movie has been deleted!', 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
  }

  public onToggleWatched(movieId: number): void {
    this.store.dispatch(toggleWatched({ movieId }));
  }

  public onFilterByGenre(genre: 'All' | 'Watched' | 'Unwatched' | string): void {
    this.store.dispatch(filterByGenre({ genre }));
  }
}
