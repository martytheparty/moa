import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item';
import { LocalStorageService } from './local-storage.service';
import { items } from '../data/items'; 

@Injectable({
  providedIn: 'root'
})
export class PlumbService {
  private itemList: Item[] = [];
  items: BehaviorSubject<Item[]>;
  jsPlumb = (window as any).jsPlumb;
  localStorage: any;

  constructor(private localStorageService: LocalStorageService) {
    this.localStorage = localStorageService.getLocalStorage();
    this.itemList = items;

    this.itemList.forEach(
      (item) => {
        const coordinates = this.localStorage.getItem(item.id);
        if (coordinates) {
          const coordinateObject = JSON.parse(coordinates);
          item.x = coordinateObject.x;
          item.y = coordinateObject.y;
        }
      }
    );

    this.items = new BehaviorSubject(this.itemList);
  }

  getPlumb(): any {
    return this.jsPlumb;
  }

  getItemPos(currentItem: Item): number {
    const items = this.items.value;
    const pos = items.findIndex(
      (item) => {
        return (
          item.name === currentItem.name &&
          item.level === currentItem.level &&
          item.parent === currentItem.parent
          );
      }
    );
    return pos;
  }

  getItemById(id: number): Item {
    const items = this.items.value;
    const pos = items.findIndex(
      (item) => {
        return (item.id === id);
      }
    );
    return items[pos];
  }

  attachElementToItem(currentItem: Item, ele: HTMLElement): void {
    const items = this.items.value;
    const pos: number = this.getItemPos(currentItem);
    items[pos].ele = ele;
    this.items.next(items);
  }

  setDraggable(currentItem: Item, ele: HTMLElement): void {
    const items = this.items.value;
    const pos: number = this.getItemPos(currentItem);
    this.jsPlumb.draggable(ele, {});
    items[pos].draggable = true;
    this.items.next(items);
  }

  connectParent(currentItem: Item): any {
    if (currentItem.parent) {
      const parent = this.getItemById(currentItem.parentId);
      const ele = parent.ele;
      if (ele) {
        this.jsPlumb.connect(
          {
            source: currentItem.ele,
            target: ele,
            paintStyle: { strokeWidth: 3, stroke: 'rgb(25,118,210)' },
            anchors: ['Top', 'Bottom'],
            endpointStyle: {radius: 5},
            detachable: false
          }
        );
      }

    }
  }

  updateItem(item: Item): boolean {
    this.localStorage.setItem(item.id, JSON.stringify({x: item.x, y: item.y}));
    const items = this.items.value;
    const pos: number = this.getItemPos(item);
    items[pos] = item;
    this.items.next(items);
    return true;
  }

}
