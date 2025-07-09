import { FormControl } from '@angular/forms';

export interface Form {
  title: FormControl<string | null>;
  genre: FormControl;
}
