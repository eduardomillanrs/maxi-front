import { Component } from '@angular/core';

import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-home',
  imports: [SkeletonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
