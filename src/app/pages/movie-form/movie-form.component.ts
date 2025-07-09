import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from '../../interfaces/category.interface';
import { Store } from '@ngrx/store';
import { Form } from '../../interfaces/form.interface';
import { addMovie } from '../../store/movie.action';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movie-form',
  imports: [MatButton, ReactiveFormsModule],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.scss'
})
export class MovieFormComponent {
  private store = inject(Store);

  public form = new FormGroup<Form>({
    title: new FormControl(null, Validators.required),
    genre: new FormControl('Action')
  });

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

  public addMovie() {
    if (this.form.invalid) return;

    const movie: Movie = {
      id: Date.now(),
      title: this.form.value.title!,
      genre: this.form.value.genre!,
      watched: false
    };

    this.store.dispatch(addMovie({ movie }));

    this.form.reset(
      {
        title: null,
        genre: 'Action'
      },
      { emitEvent: false }
    );
  }
}
