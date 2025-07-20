import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent, SidebarComponent } from '@admin/app/core/layout/components';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
