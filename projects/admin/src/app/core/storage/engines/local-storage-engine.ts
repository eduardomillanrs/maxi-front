import { Injectable } from '@angular/core';

import { StorageEngine } from '@admin/app/core/storage/engines/storage-engine';

@Injectable({ providedIn: 'root' })
export class LocalStorageEngine implements StorageEngine {
  public getItem<T>(key: string): T | null {
    return JSON.parse(window.localStorage.getItem(key)!);
  }

  public setItem<T>(key: string, value: T): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  public removeItem(key: string): void {
    window.localStorage.removeItem(key);
  }

  public clear(): void {
    window.localStorage.clear();
  }
}
