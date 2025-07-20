import { inject, Injectable } from '@angular/core';

import { LocalStorageEngine } from '@admin/app/core/storage/sources/local-storage-engine';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private readonly engine = inject(LocalStorageEngine);

  public get<T>(key: string): T | null {
    return this.engine.getItem(key);
  }

  public set<T>(key: string, value: T): void {
    this.engine.setItem(key, value);
  }

  public remove(key: string): void {
    this.engine.removeItem(key);
  }

  public clear(): void {
    this.engine.clear();
  }
}
