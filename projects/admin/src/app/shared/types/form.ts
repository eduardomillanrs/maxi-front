import { FormControl } from '@angular/forms';

export type WithForm<T extends object> = {
  [K in keyof T]: FormControl<T[K]>;
};

export type FormError<T extends object> = {
  [K in keyof T]?: string[];
};
