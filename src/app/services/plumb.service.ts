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
      { id: 1, name: 'NG', level:0, x: 1739, y: 64},
      { id: 2, name: 'Main Concepts', level:1, parent:'NG','parentId':1, x: 619, y: 184},
      { id: 3, name: 'Components', level:2, parent:'Main Concepts','parentId':2, x: 29, y: 521},
      { id: 4, name: 'User Input', level:3, parent:'Components','parentId':3, x: 92, y: 743},
      { id: 5, name: 'Pipes', level:3, parent:'Components','parentId':3, x: 274, y: 637},
      { id: 6, name: 'Component Pipes', level:3, parent:'Components','parentId':3, x: 271, y: 691},
      { id: 7, name: 'Component Interaction', level:3, parent:'Components','parentId':3, x: 134, y: 817},
      { id: 8, name: 'Component Styles', level:3, parent:'Components','parentId':3, x: 12, y: 850},
      { id: 9, name: 'Angular Elements', level:3, parent:'Components','parentId':3, x: 205, y: 727},
      { id: 10, name: 'Templates', level:2, parent:'Main Concepts','parentId':2, x: 380, y: 865},
      { id: 11, name: 'Introduction', level:3, parent:'Templates','parentId':10, x: 518, y: 949},
      { id: 12, name: 'Interpolation', level:3, parent:'Templates','parentId':10, x: 130, y: 1064},
      { id: 13, name: 'Template Statements', level:3, parent:'Templates','parentId':10, x: 408, y: 1126},
      { id: 14, name: 'Binding Syntax', level:3, parent:'Templates','parentId':10, x: 525, y: 1167},
      { id: 15, name: 'Property Binding', level:3, parent:'Templates','parentId':10, x: 280, y: 1127},
      { id: 16, name: 'Attribute, class, and style bindings', level:3, parent:'Templates','parentId':10, x: 65, y: 1158},
      { id: 17, name: 'Event binding', level:3, parent:'Templates','parentId':10, x: 575, y: 993},
      { id: 18, name: 'Two-way binding', level:3, parent:'Templates','parentId':10, x: 343, y: 1162},
      { id: 19, name: 'Template reference variables', level:3, parent:'Templates','parentId':10, x: 103, y: 1230},
      { id: 20, name: 'Inputs and Outputs', level:3, parent:'Templates','parentId':10, x: 647, y: 1172},
      { id: 21, name: 'Template expression operators', level:3, parent:'Templates','parentId':10, x: 537, y: 1206},
      { id: 22, name: 'SVG in templates', level:3, parent:'Templates','parentId':10, x: 33, y: 1096},
      { id: 23, name: 'Directives', level:2, parent:'Main Concepts','parentId':2, x: 55, y: 187},
      { id: 24, name: 'Built-in directives', level:3, parent:'Directives','parentId':23, x: 257, y: 250},
      { id: 25, name: 'Attribute Directives', level:3, parent:'Directives','parentId':23, x: 64, y: 379},
      { id: 26, name: 'Structural Directives', level:3, parent:'Directives','parentId':23, x: 175, y: 327},
      { id: 27, name: 'Dependency Injection', level:2, parent:'Main Concepts','parentId':2, x: 344, y: 441},
      { id: 28, name: 'Angular Dependency Injection', level:3, parent:'Dependency Injection','parentId':27, x: 186, y: 511},
      { id: 29, name: 'DI Providers', level:3, parent:'Dependency Injection','parentId':27, x: 496, y: 409},
      { id: 30, name: 'DI in Action', level:3, parent:'Dependency Injection','parentId':27, x: 452, y: 521},
      { id: 31, name: 'Navigate the Component Tree', level:3, parent:'Dependency Injection','parentId':27, x: 314, y: 570},
      { id: 32, name: 'Built-in Features', level:1, parent:'NG','parentId':1, x: 875, y: 233},
      { id: 33, name: 'Routing & Navigation', level:2, parent:'Built-in Features','parentId':32, x: 656, y: 736},
      { id: 34, name: 'Forms', level:2, parent:'Built-in Features','parentId':32, x: 779, y: 435},
      { id: 35, name: 'Template Driven', level:3, parent:'Forms','parentId':34, x: 550, y: 582},
      { id: 36, name: 'Model Driven', level:3, parent:'Forms','parentId':34, x: 612, y: 686},
      { id: 37, name: 'Reactive Forms', level:3, parent:'Forms','parentId':34, x: 524, y: 730},
      { id: 38, name: 'Validate form input', level:3, parent:'Forms','parentId':34, x: 443, y: 765},
      { id: 39, name: 'Building Dynamic Forms', level:3, parent:'Forms','parentId':34, x: 584, y: 481},
      { id: 40, name: 'HTTP Client', level:2, parent:'Built-in Features','parentId':32, x: 760, y: 789},
      { id: 41, name: 'i18n', level:2, parent:'Built-in Features','parentId':32, x: 744, y: 693},
      { id: 42, name: 'Animation', level:2, parent:'Built-in Features','parentId':32, x: 757, y: 240},
      { id: 43, name: 'Schematics', level:2, parent:'Built-in Features','parentId':32, x: 807, y: 860},
      { id: 44, name: 'Service Workers & PWA', level:2, parent:'Built-in Features','parentId':32, x: 662, y: 340},
      { id: 45, name: 'Conceptual References', level:1, parent:'NG','parentId':1, x: 2914, y: 244},
      { id: 46, name: 'Angular Concepts', level:2, parent:'Conceptual References','parentId':45, x: 3254, y: 205},
      { id: 47, name: 'Intro to Modules', level:3, parent:'Angular Concepts','parentId':46, x: 3226, y: 390},
      { id: 48, name: 'Intro to Components', level:3, parent:'Angular Concepts','parentId':46, x: 3157, y: 293},
      { id: 49, name: 'Intro to Services', level:3, parent:'Angular Concepts','parentId':46, x: 3314, y: 430},
      { id: 50, name: 'Project Structure', level:2, parent:'Conceptual References','parentId':45, x: 2977, y: 602},
      { id: 51, name: 'Project File Structure', level:3, parent:'Project Structure','parentId':50, x: 3164, y: 602},
      { id: 52, name: 'Workspace Configuration', level:3, parent:'Project Structure','parentId':50, x: 3257, y: 854},
      { id: 53, name: 'npm Dependencies', level:3, parent:'Project Structure','parentId':50, x: 3240, y: 985},
      { id: 54, name: 'TypeScript Configuration', level:3, parent:'Project Structure','parentId':50, x: 3160, y: 929},
      { id: 55, name: 'Browser Support', level:3, parent:'Project Structure','parentId':50, x: 3126, y: 1006},
      { id: 56, name: 'Strict mode', level:3, parent:'Project Structure','parentId':50, x: 3061, y: 1013},
      { id: 57, name: 'NgModules', level:2, parent:'Conceptual References','parentId':45, x: 2859, y: 708},
      { id: 58, name: 'JS Modules', level:3, parent:'NgModules','parentId':57, x: 2830, y: 1121},
      { id: 59, name: 'NG Modules', level:3, parent:'NgModules','parentId':57, x: 2917, y: 1201},
      { id: 60, name: 'Frequently Used Modules', level:3, parent:'NgModules','parentId':57, x: 3035, y: 1232},
      { id: 61, name: 'Types Of Feature Modules', level:3, parent:'NgModules','parentId':57, x: 2627, y: 1160},
      { id: 62, name: 'Providing Dependencies', level:3, parent:'NgModules','parentId':57, x: 2751, y: 1213},
      { id: 63, name: 'Lazy Loading Feature Modules', level:3, parent:'NgModules','parentId':57, x: 2672, y: 1253},
      { id: 64, name: 'Sharing Ng Modules', level:3, parent:'NgModules','parentId':57, x: 2565, y: 1090},
      { id: 65, name: 'Ng Module API', level:3, parent:'NgModules','parentId':57, x: 2910, y: 1287},
      { id: 66, name: 'Singleton Services', level:3, parent:'NgModules','parentId':57, x: 2951, y: 1130},
      { id: 67, name: 'Root Modules', level:3, parent:'NgModules','parentId':57, x: 2602, y: 1016},
      { id: 68, name: 'RXJS', level:2, parent:'Conceptual References','parentId':45, x: 3335, y: 589},
      { id: 69, name: 'Observable', level:3, parent:'RXJS','parentId':68, x: 3434, y: 768},
      { id: 70, name: 'RXJS Library', level:3, parent:'RXJS','parentId':68, x: 3415, y: 893},
      { id: 71, name: 'Observables in Angular', level:3, parent:'RXJS','parentId':68, x: 3433, y: 651},
      { id: 72, name: 'Practical Usage', level:3, parent:'RXJS','parentId':68, x: 3315, y: 795},
      { id: 73, name: 'Best Practices', level:1, parent:'NG','parentId':1, x: 2660, y: 250},
      { id: 74, name: 'Angular Tools', level:1, parent:'NG','parentId':1, x: 1313, y: 270},
      { id: 75, name: 'Tutorials', level:1, parent:'NG','parentId':1, x: 1744, y: 336},
      { id: 76, name: 'Security', level:2, parent:'Best Practices','parentId':73, x: 2743, y: 373},
      { id: 77, name: 'Accessibility', level:2, parent:'Best Practices','parentId':73, x: 2676, y: 421},
      { id: 78, name: 'Keeping Up-to-Date', level:2, parent:'Best Practices','parentId':73, x: 2515, y: 450},
      { id: 79, name: 'Testing', level:2, parent:'Best Practices','parentId':73, x: 2205, y: 282},
      { id: 80, name: 'Dev Workflow', level:2, parent:'Best Practices','parentId':73, x: 2597, y: 467},
      { id: 81, name: 'Injection Token', level:2, parent:'Best Practices','parentId':73, x: 2482, y: 379},
      { id: 82, name: 'Code Coverage', level:3, parent:'Testing','parentId':79, x: 2043, y: 423},
      { id: 83, name: 'Testing Services', level:3, parent:'Testing','parentId':79, x: 2101, y: 480},
      { id: 84, name: 'Basic Components', level:3, parent:'Testing','parentId':79, x: 2162, y: 538},
      { id: 85, name: 'Testing Scenarios', level:3, parent:'Testing','parentId':79, x: 2235, y: 569},
      { id: 86, name: 'Attribute Directives', level:3, parent:'Testing','parentId':79, x: 2301, y: 608},
      { id: 87, name: 'Pipes', level:3, parent:'Testing','parentId':79, x: 2080, y: 318},
      { id: 88, name: 'Debugging Tests', level:3, parent:'Testing','parentId':79, x: 2004, y: 238},
      { id: 89, name: 'Testing APIs', level:3, parent:'Testing','parentId':79, x: 2403, y: 607},
      { id: 90, name: 'Deploying Applications', level:2, parent:'Dev Workflow','parentId':80, x: 2684, y: 635},
      { id: 91, name: 'AOT Compiler', level:2, parent:'Dev Workflow','parentId':80, x: 2503, y: 674},
      { id: 92, name: 'Building and Serving', level:2, parent:'Dev Workflow','parentId':80, x: 2636, y: 709},
      { id: 93, name: 'AOT Compilation', level:2, parent:'AOT Compiler','parentId':91, x: 2276, y: 746},
      { id: 94, name: 'Compiler Options', level:2, parent:'AOT Compiler','parentId':91, x: 2323, y: 865},
      { id: 95, name: 'AOT Metadata Errors', level:2, parent:'AOT Compiler','parentId':91, x: 2406, y: 817},
      { id: 96, name: 'Template Type Checking', level:2, parent:'AOT Compiler','parentId':91, x: 2551, y: 788},
      { id: 97, name: 'CLI Builders', level:2, parent:'Angular Tools','parentId':74, x: 1163, y: 367},
      { id: 98, name: 'Server-side Rendering', level:2, parent:'Angular Tools','parentId':74, x: 1431, y: 376},
      { id: 99, name: 'Language Service', level:2, parent:'Angular Tools','parentId':74, x: 1239, y: 439},
      { id: 100, name: 'Tour Of Heroes', level:2, parent:'Tutorials','parentId':75, x: 1913, y: 809},
      { id: 101, name: 'Routing', level:2, parent:'Tutorials','parentId':75, x: 1483, y: 654},
      { id: 102, name: 'Template-driven Form', level:2, parent:'Tutorials','parentId':75, x: 1708, y: 676},
      { id: 103, name: 'Web Workers', level:2, parent:'Tutorials','parentId':75, x: 1962, y: 674},
      { id: 104, name: 'Angular Libraries', level:2, parent:'Tutorials','parentId':75, x: 1586, y: 766},
      { id: 105, name: 'Introduction', level:3, parent:'Tour Of Heroes','parentId':100, x: 1806, y: 942},
      { id: 106, name: 'Create A Project', level:3, parent:'Tour Of Heroes','parentId':100, x: 1730, y: 1138},
      { id: 107, name: 'Single Component', level:3, parent:'Tour Of Heroes','parentId':100, x: 1800, y: 1072},
      { id: 108, name: 'List Component', level:3, parent:'Tour Of Heroes','parentId':100, x: 1874, y: 1130},
      { id: 109, name: 'Feature Component', level:3, parent:'Tour Of Heroes','parentId':100, x: 2082, y: 924},
      { id: 110, name: 'Add Services', level:3, parent:'Tour Of Heroes','parentId':100, x: 2042, y: 1042},
      { id: 111, name: 'In-App Nav', level:3, parent:'Tour Of Heroes','parentId':100, x: 1930, y: 1070},
      { id: 112, name: 'Server', level:3, parent:'Tour Of Heroes','parentId':100, x: 1982, y: 1016},
      { id: 113, name: 'Overview', level:3, parent:'Routing','parentId':101, x: 1302, y: 726},
      { id: 114, name: 'Routing Tutorial', level:3, parent:'Routing','parentId':101, x: 1386, y: 796},
      { id: 115, name: 'Libraries Overview', level:3, parent:'Tutorials','parentId':104, x: 1538, y: 1044},
      { id: 116, name: 'Published Libraries', level:3, parent:'Tutorials','parentId':104, x: 1658, y: 872},
      { id: 117, name: 'Creating Libraries', level:3, parent:'Tutorials','parentId':104, x: 1464, y: 918}];

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
