import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemComponent } from 'src/app/item/item.component';
import { Item } from 'src/app/models/item';
import { mockItems } from './mock-items';

@Injectable({
  providedIn: 'root'
})
export class MockPlumbService {

  private itemList = mockItems;
  items: BehaviorSubject<Item[]>;

  jsPlumb = {};



  constructor() {
    this.items = new BehaviorSubject(this.itemList);
   }

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

  getItems() {
    return this.itemList;
  }

  updateItem(item: Item): boolean {
    return true;
  }

}
