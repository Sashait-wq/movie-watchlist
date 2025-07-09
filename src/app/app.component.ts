import { Component } from '@angular/core';
import { MovieListPageComponent } from './pages/movie-list-page/movie-list-page.component';

@Component({
  selector: 'app-root',
  imports: [MovieListPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movie-watchlist';
}
