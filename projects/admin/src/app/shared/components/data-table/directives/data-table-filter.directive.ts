import { Directive, inject, input, TemplateRef } from '@angular/core';

@Directive({ selector: '[appDataTableFilter]' })
export class DataTableFilterDirective {
  public readonly field = input.required<string>({ alias: 'appDataTableFilter' });
  public readonly template = inject<TemplateRef<unknown>>(TemplateRef);
}
