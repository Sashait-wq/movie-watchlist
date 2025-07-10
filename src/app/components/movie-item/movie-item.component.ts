import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-movie-item',
  imports: [MatButton],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.scss'
})
export class MovieItemComponent {
  @Input() movie!: Movie;
  @Output() deleteMovie = new EventEmitter<number>();
  @Output() toggleWatched = new EventEmitter<number>();
}
