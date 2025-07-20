import { computed, effect, inject, Injectable, signal } from '@angular/core';

import { StorageService } from '@admin/app/core/storage/storage.service';

type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageService = inject(StorageService);

  private readonly theme = signal<Theme | null>(null);

  public readonly isDarkMode = computed(() => this.theme() === 'dark');

  constructor() {
    effect(() => {
      if (this.theme()) {
        this.storageService.set('app-theme', this.theme());
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(this.theme()!);
      }
    });
  }

  public load(): void {
    this.theme.set(this.storageService.get<Theme>('app-theme') ?? 'light');
  }

  public toggle(): void {
    this.theme.update((theme) => (theme === 'light' ? 'dark' : 'light'));
  }
}
