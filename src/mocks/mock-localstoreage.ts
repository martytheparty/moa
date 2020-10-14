import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class MockLocalStorageService {

    localStorage = (window as any).localStorage;

    constructor() {}

    getItem(id: number): string {
        if (id === 1) {
            return "{\"x\":1739,\"y\":64}";
        }
        return undefined;
    }

    setItem(id: string, value: string): boolean {
      return true;
    }

    getLocalStorage(): any {
        const ls = {};
        ls['getItem'] = this.getItem;
        ls['setItem'] = this.setItem;
        return ls;
    }
}