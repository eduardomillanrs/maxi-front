import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page',
  imports: [],
  templateUrl: './page.component.html',
})
export class PageComponent {
  public readonly title = input.required<string>();
  public readonly subtitle = input<string>();
}
