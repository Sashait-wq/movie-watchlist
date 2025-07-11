import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-filter-buttons',
  imports: [MatButton],
  templateUrl: './filter-buttons.component.html',
  styleUrl: './filter-buttons.component.scss'
})
export class FilterButtonsComponent {
  @Input() movies: Movie[] = [];
  @Output() filterByGenre = new EventEmitter<string>();

  public feltered(genre: 'All' | 'Watched' | 'Unwatched' | string = 'All') {
    this.filterByGenre.emit(genre);
  }
}
