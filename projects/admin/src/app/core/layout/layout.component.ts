import { AfterViewInit, Component, ElementRef, inject, Renderer2, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent, SidebarComponent } from '@admin/app/core/layout/components';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements AfterViewInit {
  protected readonly cw = viewChild.required<ElementRef<HTMLDivElement>>('cw');
  private readonly renderer = inject(Renderer2);

  public ngAfterViewInit(): void {
    this.renderer.setStyle(this.cw().nativeElement, 'transition', 'var(--layout-transition)');
  }
}
