import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item';
import { LocalStorageService } from './local-storage.service';

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
    this.itemList = [
      {id: 1, name: 'NG', level: 0, x: 1739, y: 64},
      {id: 2, name: 'Main Concepts', level: 1, parent: 'NG', parentId: 1, x: 619, y: 184},
      {id: 3, name: 'Components', level: 2, parent: 'Main Concepts', parentId: 2, x: 183, y: 534},
      {id: 4, name: 'User Input', level: 3, parent: 'Components', parentId: 3, x: 94, y: 961},
      {id: 5, name: 'Pipes', level: 3, parent: 'Components', parentId: 3, x: 274, y: 637},
      {id: 6, name: 'Component Pipes', level: 3, parent: 'Components', parentId: 3, x: 271, y: 691},
      {id: 7, name: 'Component Interaction', level: 3, parent: 'Components', parentId: 3, x: 150, y: 868},
      {id: 8, name: 'Component Styles', level: 3, parent: 'Components', parentId: 3, x: 163, y: 934},
      {id: 9, name: 'Angular Elements', level: 3, parent: 'Components', parentId: 3, x: 217, y: 804},
      {id: 10, name: 'Templates', level: 2, parent: 'Main Concepts', parentId: 2, x: 872, y: 526},
      {id: 11, name: 'Introduction', level: 3, parent: 'Templates', parentId: 10, x: 974, y: 609},
      {id: 12, name: 'Interpolation', level: 3, parent: 'Templates', parentId: 10, x: 704, y: 580},
      {id: 13, name: 'Template Statements', level: 3, parent: 'Templates', parentId: 10, x: 945, y: 870},
      {id: 14, name: 'Binding Syntax', level: 3, parent: 'Templates', parentId: 10, x: 665, y: 818},
      {id: 15, name: 'Property Binding', level: 3, parent: 'Templates', parentId: 10, x: 612, y: 546},
      {id: 16, name: 'Attribute, class, and style bindings', level: 3, parent: 'Templates', parentId: 10, x: 617, y: 897},
      {id: 17, name: 'Event binding', level: 3, parent: 'Templates', parentId: 10, x: 1065, y: 640},
      {id: 18, name: 'Two-way binding', level: 3, parent: 'Templates', parentId: 10, x: 572, y: 715},
      {id: 19, name: 'Template reference variables', level: 3, parent: 'Templates', parentId: 10, x: 773, y: 817},
      {id: 20, name: 'Inputs and Outputs', level: 3, parent: 'Templates', parentId: 10, x: 1055, y: 786},
      {id: 21, name: 'Template expression operators', level: 3, parent: 'Templates', parentId: 10, x: 1107, y: 828},
      {id: 22, name: 'SVG in templates', level: 3, parent: 'Templates', parentId: 10, x: 681, y: 686},
      {id: 23, name: 'Directives', level: 2, parent: 'Main Concepts', parentId: 2, x: 62, y: 541},
      {id: 24, name: 'Built-in directives', level: 3, parent: 'Directives', parentId: 23, x: 45, y: 691},
      {id: 25, name: 'Attribute Directives', level: 3, parent: 'Directives', parentId: 23, x: 13, y: 804},
      {id: 26, name: 'Structural Directives', level: 3, parent: 'Directives', parentId: 23, x: 19, y: 747},
      {id: 27, name: 'Dependency Injection', level: 2, parent: 'Main Concepts', parentId: 2, x: 364, y: 540},
      {id: 28, name: 'Angular Dependency Injection', level: 3, parent: 'Dependency Injection', parentId: 27, x: 306, y: 896},
      {id: 29, name: 'DI Providers', level: 3, parent: 'Dependency Injection', parentId: 27, x: 450, y: 853},
      {id: 30, name: 'DI in Action', level: 3, parent: 'Dependency Injection', parentId: 27, x: 408, y: 797},
      {id: 31, name: 'Navigate the Component Tree', level: 3, parent: 'Dependency Injection', parentId: 27, x: 454, y: 942},
      {id: 32, name: 'Built-in Features', level: 1, parent: 'NG', parentId: 1, x: 1696, y: 246},
      {id: 33, name: 'Routing & Navigation', level: 2, parent: 'Built-in Features', parentId: 32, x: 1591, y: 839},
      {id: 34, name: 'Forms', level: 2, parent: 'Built-in Features', parentId: 32, x: 1898, y: 715},
      {id: 35, name: 'Template Driven', level: 3, parent: 'Forms', parentId: 34, x: 1857, y: 846},
      {id: 36, name: 'Model Driven', level: 3, parent: 'Forms', parentId: 34, x: 1784, y: 778},
      {id: 37, name: 'Reactive Forms', level: 3, parent: 'Forms', parentId: 34, x: 1941, y: 881},
      {id: 38, name: 'Validate form input', level: 3, parent: 'Forms', parentId: 34, x: 2003, y: 787},
      {id: 39, name: 'Building Dynamic Forms', level: 3, parent: 'Forms', parentId: 34, x: 1697, y: 911},
      {id: 40, name: 'HTTP Client', level: 2, parent: 'Built-in Features', parentId: 32, x: 1742, y: 634},
      {id: 41, name: 'i18n', level: 2, parent: 'Built-in Features', parentId: 32, x: 1596, y: 721},
      {id: 42, name: 'Animation', level: 2, parent: 'Built-in Features', parentId: 32, x: 1476, y: 726},
      {id: 43, name: 'Schematics', level: 2, parent: 'Built-in Features', parentId: 32, x: 1997, y: 631},
      {id: 44, name: 'Service Workers & PWA', level: 2, parent: 'Built-in Features', parentId: 32, x: 1482, y: 797},
      {id: 45, name: 'Conceptual References', level: 1, parent: 'NG', parentId: 1, x: 2914, y: 244},
      {id: 46, name: 'Angular Concepts', level: 2, parent: 'Conceptual References', parentId: 45, x: 3205, y: 490},
      {id: 47, name: 'Intro to Modules', level: 3, parent: 'Angular Concepts', parentId: 46, x: 3181, y: 739},
      {id: 48, name: 'Intro to Components', level: 3, parent: 'Angular Concepts', parentId: 46, x: 3339, y: 742},
      {id: 49, name: 'Intro to Services', level: 3, parent: 'Angular Concepts', parentId: 46, x: 3264, y: 800},
      {id: 50, name: 'Project Structure', level: 2, parent: 'Conceptual References', parentId: 45, x: 2586, y: 495},
      {id: 51, name: 'Project File Structure', level: 3, parent: 'Project Structure', parentId: 50, x: 2652, y: 607},
      {id: 52, name: 'Workspace Configuration', level: 3, parent: 'Project Structure', parentId: 50, x: 2543, y: 723},
      {id: 53, name: 'npm Dependencies', level: 3, parent: 'Project Structure', parentId: 50, x: 2414, y: 706},
      {id: 54, name: 'TypeScript Configuration', level: 3, parent: 'Project Structure', parentId: 50, x: 2395, y: 589},
      {id: 55, name: 'Browser Support', level: 3, parent: 'Project Structure', parentId: 50, x: 2608, y: 678},
      {id: 56, name: 'Strict mode', level: 3, parent: 'Project Structure', parentId: 50, x: 2501, y: 771},
      {id: 57, name: 'NgModules', level: 2, parent: 'Conceptual References', parentId: 45, x: 2774, y: 508},
      {id: 58, name: 'JS Modules', level: 3, parent: 'NgModules', parentId: 57, x: 2700, y: 1014},
      {id: 59, name: 'NG Modules', level: 3, parent: 'NgModules', parentId: 57, x: 2893, y: 1045},
      {id: 60, name: 'Frequently Used Modules', level: 3, parent: 'NgModules', parentId: 57, x: 2807, y: 910},
      {id: 61, name: 'Types Of Feature Modules', level: 3, parent: 'NgModules', parentId: 57, x: 2614, y: 1010},
      {id: 62, name: 'Providing Dependencies', level: 3, parent: 'NgModules', parentId: 57, x: 2761, y: 1020},
      {id: 63, name: 'Lazy Loading Feature Modules', level: 3, parent: 'NgModules', parentId: 57, x: 2658, y: 930},
      {id: 64, name: 'Sharing Ng Modules', level: 3, parent: 'NgModules', parentId: 57, x: 2915, y: 903},
      {id: 65, name: 'Ng Module API', level: 3, parent: 'NgModules', parentId: 57, x: 2740, y: 951},
      {id: 66, name: 'Singleton Services', level: 3, parent: 'NgModules', parentId: 57, x: 2855, y: 970},
      {id: 67, name: 'Root Modules', level: 3, parent: 'NgModules', parentId: 57, x: 2575, y: 966},
      {id: 68, name: 'RXJS', level: 2, parent: 'Conceptual References', parentId: 45, x: 3056, y: 502},
      {id: 69, name: 'Observable', level: 3, parent: 'RXJS', parentId: 68, x: 3048, y: 912},
      {id: 70, name: 'RXJS Library', level: 3, parent: 'RXJS', parentId: 68, x: 2972, y: 824},
      {id: 71, name: 'Observables in Angular', level: 3, parent: 'RXJS', parentId: 68, x: 3103, y: 826},
      {id: 72, name: 'Practical Usage', level: 3, parent: 'RXJS', parentId: 68, x: 3011, y: 938}
    ];

    this.itemList.forEach(
      (item) => {
        const coordinates = this.localStorage.getItem(item.id);
        if (coordinates) {
          const coordinateObject = JSON.parse(coordinates);
          item.x = coordinateObject.x;
          item.y = coordinateObject.y;
        } else {
          item.x = item.x || 100;
          item.y = item.y || 100;
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
