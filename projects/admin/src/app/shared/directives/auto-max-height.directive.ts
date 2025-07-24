import { AfterViewInit, Directive, ElementRef, inject, input, OnDestroy, Renderer2 } from '@angular/core';

const OFFSET = 60;

@Directive({
  selector: '[appAutoMaxHeight]',
})
export class AutoMaxHeightDirective implements AfterViewInit, OnDestroy {
  public readonly selector = input<string>(undefined, { alias: 'appAutoMaxHeight' });

  private readonly element = inject<ElementRef<HTMLElement | undefined>>(ElementRef);
  private readonly renderer = inject(Renderer2);
  private resizeObserver?: ResizeObserver;

  private readonly boundSetMaxHeight = this.setMaxHeight.bind(this);

  public ngAfterViewInit(): void {
    this.setMaxHeight();
    this.observeResize();
    window.addEventListener('resize', this.boundSetMaxHeight);
  }

  public ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    window.removeEventListener('resize', this.boundSetMaxHeight);
  }

  private get container(): HTMLElement | null {
    const element = this.element.nativeElement;

    if (!element) {
      return null;
    }

    if (this.selector()) {
      return element.querySelector(this.selector()!);
    }

    return element;
  }

  private observeResize(): void {
    if (!this.element.nativeElement) {
      return;
    }

    this.resizeObserver = new ResizeObserver(() => this.setMaxHeight());
    this.resizeObserver.observe(this.element.nativeElement);
  }

  private setMaxHeight(): void {
    if (!this.container) {
      return;
    }

    const top = this.container.getBoundingClientRect().top;
    const availableHeight = window.innerHeight - top - OFFSET;

    this.renderer.setStyle(this.container, 'max-height', `${availableHeight}px`);
  }
}
