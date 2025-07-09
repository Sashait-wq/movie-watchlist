import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MovieFormComponent } from '../movie-form/movie-form.component';

@Component({
  selector: 'app-movie-list-page',
  imports: [HeaderComponent, MovieFormComponent],
  templateUrl: './movie-list-page.component.html',
  styleUrl: './movie-list-page.component.scss'
})
export class MovieListPageComponent {}
