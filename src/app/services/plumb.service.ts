import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class PlumbService {
  private itemList: Item[] = [];
  items: BehaviorSubject<Item[]>;
  jsPlumb = (window as any).jsPlumb;

  constructor() { 
    this.itemList = [
      { id: 1, name: 'NG', level: 0, x: 0, y: 0 },
      { id: 2, name: 'Main Concepts', level: 1, parent: 'NG', parentId: 1, x: 0, y: 0 },
      { id: 3, name: 'Components', level: 2, parent: 'Main Concepts', parentId: 2, x: 0, y: 0 },
      { id: 4, name: 'User Input', level: 3, parent: 'Components' , parentId: 3, x: 0, y: 0},
      { id: 5, name: 'Pipes', level: 3, parent: 'Components', parentId: 3, x: 0, y: 0 },
      { id: 6, name: 'Component Pipes', level: 3, parent: 'Components', parentId: 3, x: 0, y: 0 },
      { id: 7, name: 'Component Interaction', level: 3, parent: 'Components', parentId: 3, x: 0, y: 0 },
      { id: 8, name: 'Component Styles', level: 3, parent: 'Components', parentId: 3, x: 0, y: 0 },
      { id: 9, name: 'Angular Elements', level: 3, parent: 'Components', parentId: 3, x: 0, y: 0 },
      { id: 10, name: 'Templates', level: 2, parent: 'Main Concepts', parentId: 2, x: 0, y: 0 },
      { id: 11, name: 'Introduction', level: 3, parent: 'Templates', parentId: 10, x: 0, y: 0 },
      { id: 12, name: 'Interpolation', level: 3, parent: 'Templates', parentId: 10, x: 0, y: 0 },
      { id: 13, name: 'Template Statements', level: 3, parent: 'Templates', parentId: 10, x: 0, y: 0 },
      { id: 14, name: 'Binding Syntax', level: 3, parent: 'Templates', parentId: 10, x: 0, y: 0 },    
      { id: 15, name: 'Property Binding', level: 3, parent: 'Templates', parentId: 10, x: 0, y: 0 },
      { id: 16, name: 'Attribute, class, and style bindings', level: 3, parent: 'Templates', parentId: 10, x: 0, y: 0 },    
      { id: 17, name: 'Event binding', level: 3, parent: 'Templates', parentId: 10, x: 0, y: 0 },
      { id: 18, name: 'Two-way binding', level: 3, parent: 'Templates', parentId: 10, x: 0, y: 0 },    
      { id: 19, name: 'Template reference variables', level: 3, parent: 'Templates', parentId: 10, x: 0, y: 0 },
      { id: 20, name: 'Inputs and Outputs', level: 3, parent: 'Templates', parentId: 10, x: 0, y: 0 },
      { id: 21, name: 'Template expression operators', level: 3, parent: 'Templates', parentId: 10, x: 0, y: 0 },
      { id: 22, name: 'SVG in templates', level: 3, parent: 'Templates', parentId: 10, x: 0, y: 0 },
      { id: 23, name: 'Directives', level: 2, parent: 'Main Concepts', parentId: 2, x: 0, y: 0 },
      { id: 24, name: 'Built-in directives', level: 3, parent: 'Directives', parentId: 23, x: 0, y: 0},
      { id: 25, name: 'Attribute Directives', level: 3, parent: 'Directives', parentId: 23, x: 0, y: 0 },
      { id: 26, name: 'Structural Directives', level: 3, parent: 'Directives', parentId: 23, x: 0, y: 0 },
      { id: 27, name: 'Dependency Injection', level: 2, parent: 'Main Concepts', parentId: 2, x: 0, y: 0 },
      { id: 28, name: 'Angular Dependency Injection', level: 3, parent: 'Dependency Injection', parentId: 27, x: 0, y: 0 },
      { id: 29, name: 'DI Providers', level: 3, parent: 'Dependency Injection', parentId: 27, x: 0, y: 0  },
      { id: 30, name: 'DI in Action', level: 3, parent: 'Dependency Injection', parentId: 27, x: 0, y: 0  },
      { id: 31, name: 'Navigate the Component Tree', level: 3, parent: 'Dependency Injection', parentId: 27, x: 0, y: 0  },
      { id: 32, name: 'Built-in Features', level: 1, parent: 'NG', parentId: 0, x: 0, y: 0 },
      { id: 33, name: 'Routing & Navigation', level: 2, parent: 'Built-in Features', parentId: 32, x: 0, y: 0 },
      { id: 34, name: 'Forms', level: 2, parent: 'Built-in Features', parentId: 32, x: 0, y: 0 },
      { id: 35, name: 'Template Driven', level: 3, parent: 'Forms', parentId: 34, x: 0, y: 0 },
      { id: 36, name: 'Model Driven', level: 3, parent: 'Forms', parentId: 34, x: 0, y: 0 },
      { id: 37, name: 'Reactive Forms', level: 3, parent: 'Forms', parentId: 34, x: 0, y: 0 },
      { id: 38, name: 'Validate form input', level: 3, parent: 'Forms', parentId: 34, x: 0, y: 0 },
      { id: 39, name: 'Building Dynamic Forms', level: 3, parent: 'Forms', parentId: 34, x: 0, y: 0 },
      { id: 40, name: 'HTTP Client', level: 2, parent: 'Built-in Features', parentId: 32, x: 0, y: 0 },
      { id: 41, name: 'i18n', level: 2, parent: 'Built-in Features', parentId: 32, x: 0, y: 0 },
      { id: 42, name: 'Animation', level: 2, parent: 'Built-in Features', parentId: 32, x: 0, y: 0 },
      { id: 43, name: 'Schematics', level: 2, parent: 'Built-in Features', parentId: 32, x: 0, y: 0 },
      { id: 44, name: 'Service Workers & PWA', level: 2, parent: 'Built-in Features', parentId: 32, x: 0, y: 0 },
      { id: 45, name: 'Conceptual References', level: 1, parent: 'NG', parentId: 1, x: 0, y: 0 },
      { id: 46, name: 'Angular Concepts', level: 2, parent: 'Conceptual References', parentId: 45, x: 0, y: 0 },
      { id: 47, name: 'Intro to Modules', level: 3, parent: 'Angular Concepts', parentId: 46, x: 0, y: 0 },
      { id: 48, name: 'Intro to Components', level: 3, parent: 'Angular Concepts', parentId: 46, x: 0, y: 0 },
      { id: 49, name: 'Intro to Services', level: 3, parent: 'Angular Concepts', parentId: 46, x: 0, y: 0 },
      { id: 50, name: 'Project Structure', level: 2, parent: 'Conceptual References', parentId: 45, x: 0, y: 0 },
      { id: 51, name: 'Project File Structure', level: 3, parent: 'Project Structure', parentId: 50, x: 0, y: 0 },
      { id: 52, name: 'Workspace Configuration', level: 3, parent: 'Project Structure', parentId: 50, x: 0, y: 0 },
      { id: 53, name: 'npm Dependencies', level: 3, parent: 'Project Structure', parentId: 50, x: 0, y: 0 },
      { id: 54, name: 'TypeScript Configuration', level: 3, parent: 'Project Structure', parentId: 50, x: 0, y: 0 },
      { id: 55, name: 'Browser Support', level: 3, parent: 'Project Structure', parentId: 50, x: 0, y: 0 },
      { id: 56, name: 'Strict mode', level: 3, parent: 'Project Structure', parentId: 50, x: 0, y: 0 },
      { id: 57, name: 'NgModules', level: 2, parent: 'Conceptual References', parentId: 45, x: 0, y: 0 },
      { id: 58, name: 'JS Modules', level: 3, parent: 'NgModules', parentId: 57, x: 0, y: 0 },
      { id: 59, name: 'NG Modules', level: 3, parent: 'NgModules', parentId: 57, x: 0, y: 0 },
      { id: 60, name: 'Frequently Used Modules', level: 3, parent: 'NgModules', parentId: 57, x: 0, y: 0 },
      { id: 61, name: 'Types Of Feature Modules', level: 3, parent: 'NgModules', parentId: 57, x: 0, y: 0 },
      { id: 62, name: 'Providing Dependencies', level: 3, parent: 'NgModules', parentId: 57, x: 0, y: 0 },
      { id: 63, name: 'Lazy Loading Feature Modules', level: 3, parent: 'NgModules', parentId: 57, x: 0, y: 0 },
      { id: 64, name: 'Sharing Ng Modules', level: 3, parent: 'NgModules', parentId: 57, x: 0, y: 0 },
      { id: 65, name: 'Ng Module API', level: 3, parent: 'NgModules', parentId: 57, x: 0, y: 0 },
      { id: 66, name: 'Singleton Services', level: 3, parent: 'NgModules', parentId: 57, x: 0, y: 0 },
      { id: 67, name: 'Root Modules', level: 3, parent: 'NgModules', parentId: 57, x: 0, y: 0 },
      { id: 68, name: 'RXJS', level: 2, parent: 'Conceptual References', parentId: 45, x: 0, y: 0 },
      { id: 69, name: 'Observable', level: 3, parent: 'RXJS', parentId: 68, x: 0, y: 0 },
      { id: 70, name: 'RXJS Library', level: 3, parent: 'RXJS', parentId: 68, x: 0, y: 0 },
      { id: 71, name: 'Observables in Angular', level: 3, parent: 'RXJS', parentId: 68, x: 0, y: 0 },
      { id: 72, name: 'Practical Usage', level: 3, parent: 'RXJS', parentId: 68, x: 0, y: 0 },
    ]; 
    this.items = new BehaviorSubject(this.itemList);
  }

  getPlumb() {
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
          )
      }
    );
    return pos;
  }

  getItemById(id: Number): Item {
    const items = this.items.value;
    const pos = items.findIndex(
      (item) => {
        return (item.id === id);
      }
    );
    return items[pos];
  }

  setDraggable(currentItem: Item, ele) {
    const items = this.items.value;
    const pos: number = this.getItemPos(currentItem);
    this.jsPlumb.draggable(ele, {});
    items[pos].ele = ele;
    items[pos].draggable = true;
    this.items.next(items);
  }

  connectParent(currentItem: Item) {
    if (currentItem.parent) {
      const parent = this.getItemById(currentItem.parentId);
      if (parent) {
        this.jsPlumb.connect({source:currentItem.ele, target:parent.ele});
        console.log(`connect ${currentItem.ele} => ${parent.ele}`);
      }

    }
  }

  updateItem(item: Item) {
    const items = this.items.value;
    const pos: number = this.getItemPos(item);
    items[pos] = item;
    this.items.next(items);

  }

}
