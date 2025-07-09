import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'app-movie-form',
  imports: [MatButton, ReactiveFormsModule],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.scss'
})
export class MovieFormComponent {
  public categories: Category[] = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Drama' },
    { id: 4, name: 'Horror' },
    { id: 5, name: 'Romance' },
    { id: 6, name: 'Sci-Fi' },
    { id: 7, name: 'Fantasy' },
    { id: 8, name: 'Documentary' }
  ];
}
