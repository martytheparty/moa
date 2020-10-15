import { TestBed } from '@angular/core/testing';
import { MockLocalStorageService } from 'src/mocks/mock-localstoreage';
import { LocalStorageService } from './local-storage.service';


import { PlumbService } from './plumb.service';

describe('PlumbService', () => {
  let service: PlumbService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: LocalStorageService,
          useClass: MockLocalStorageService,
        }
      ]
    });
    service = TestBed.inject(PlumbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the local instance of jsPlumb',  () => {
    expect(service.getPlumb()).toBeTruthy();
  });

  it('should get an item\'s index from the item list', () => {
    const retrieveIndex = 5;
    const retrieveItem = service.items.value[retrieveIndex]; // get the item at the retrieve index.
    const calculatedPosition = service.getItemPos(retrieveItem);
    expect(calculatedPosition).toEqual(retrieveIndex);
  });

  it('should get an item\'s id from the item list', () => {
    const retrieveIndex = 5;
    const retrieveItem = service.items.value[retrieveIndex]; // get the item at the retrieve index.
    const retrieveId = retrieveItem.id;
    const getItem = service.getItemById(retrieveId);
    expect(JSON.stringify(getItem)).toEqual(JSON.stringify(retrieveItem));
  });

  it('should set an item to draggable', () => {
    const ele = window.document.createElement('div');
    const retrieveItem = service.items.value[0];
    expect(retrieveItem.draggable).toBeFalsy();
    service.setDraggable(retrieveItem, ele);
    expect(retrieveItem.draggable).toBeTruthy();
  });

  it('should connect an item to it\'s parent', () => {
    // setup child item
    const ele = window.document.createElement('div');
    const childItem = service.items.value[1];
    service.attachElementToItem(childItem, ele);
    service.setDraggable(childItem, ele);
    // setup parent item
    service.connectParent(childItem);
    const eleP = window.document.createElement('div');
    const parentItem = service.items.value[0];
    service.attachElementToItem(parentItem, ele);
    service.setDraggable(parentItem, eleP);
    // connect parent item (it has nothing to connect to)
    service.connectParent(parentItem);
    // connect child item (it has nothing to connect to)
    service.connectParent(childItem);
    expect(Array.from(ele.classList).find(className => (className === 'jtk-connected') )).toBeTruthy();
  });

  it('should update the item\'s position', () => {
    // setup child item
    const ele = window.document.createElement('div');
    const childItem = service.items.value[1];
    childItem.x = childItem.x + 100;
    childItem.y = childItem.y + 100;
    service.setDraggable(childItem, ele);
    // setup parent item
    service.updateItem(childItem);
    const currentItem = service.getItemById(childItem.id);
    expect(currentItem.x).toBeTruthy(childItem.x);
  });

});
