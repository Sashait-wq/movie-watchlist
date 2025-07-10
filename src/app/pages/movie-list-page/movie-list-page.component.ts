import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MovieFormComponent } from '../movie-form/movie-form.component';
import { Store } from '@ngrx/store';
import { selectMovie } from '../../store/movie.selector';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { Movie } from '../../interfaces/movie.interface';
import { addMovie, deleteMovie, filterByGenre, toggleWatched } from '../../store/movie.action';

@Component({
  selector: 'app-movie-list-page',
  imports: [HeaderComponent, MovieFormComponent, MovieListComponent],
  templateUrl: './movie-list-page.component.html',
  styleUrl: './movie-list-page.component.scss'
})
export class MovieListPageComponent implements OnInit {
  private store = inject(Store);

  private movies$ = this.store.select(selectMovie);
  public filteredMovies: Movie[] = [];

  ngOnInit(): void {
    this.movies$.subscribe((movies) => {
      this.filteredMovies = [...movies];
    });
  }

  public onAddMovie(movie: Movie): void {
    this.store.dispatch(addMovie({ movie }));
  }

  public onDeleteMovie(movieId: number): void {
    this.store.dispatch(deleteMovie({ movieId }));
  }

  public onToggleWatched(movieId: number): void {
    this.store.dispatch(toggleWatched({ movieId }));
  }

  public onFilterByGenre(genre: 'All' | 'Watched' | 'Unwatched'): void {
    this.store.dispatch(filterByGenre({ genre }));
  }
}
