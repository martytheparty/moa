import { Injectable } from '@angular/core';
import { ItemComponent } from 'src/app/item/item.component';
import { Item } from 'src/app/models/item';

@Injectable({
  providedIn: 'root'
})
export class MockPlumbService {

  jsPlumb = (window as any).jsPlumb;

  constructor() { }

  getPlumb() {
    return this.jsPlumb;
  }

  setDraggable(currentItem: Item, ele: HTMLElement): void {
    currentItem.draggable = true;
    ele.draggable = true;
  }

  connectParent(currentItem: Item): void {
    currentItem.connected = true;
  }

}
