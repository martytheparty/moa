import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  localStorage = (window as any).localStorage;

  constructor() { }

  getLocalStorage(): any {
    return this.localStorage;
  }
}
