import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { MovieItemComponent } from '../../components/movie-item/movie-item.component';

@Component({
  selector: 'app-movie-list',
  imports: [MovieItemComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  @Input() movies: Movie[] = [];
  @Output() deleteMovieEvent = new EventEmitter<number>();
  @Output() toggleWatchedEvent = new EventEmitter<number>();
}
