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

  getPlumb(): any {
    return this.jsPlumb;
  }

  attachElementToItem(currentItem: Item, ele: HTMLElement): void {
    currentItem.ele = ele;
  }

  setDraggable(currentItem: Item, ele: HTMLElement): void {
    currentItem.draggable = true;
    ele.draggable = true;
  }

  connectParent(currentItem: Item): void {
    currentItem.connected = true;
  }

  getItems(): Item[] {
    return this.itemList;
  }

  updateItem(item: Item): boolean {
    return true;
  }

}
