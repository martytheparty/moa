import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockPlumbService } from 'src/mocks/mock-plumb.service';
import { PlumbService } from '../services/plumb.service';
import { ItemComponent } from './item.component';


describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let mps = new MockPlumbService();
  let mockItems = mps.getItems();
  let item = mockItems[0];



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemComponent ],
      providers: [ 
        {
          provide: PlumbService, 
          useClass: MockPlumbService,
        } 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    component.item = item;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('constructor should get an reference to jsPlumb', () => {
    expect(component.jsPlumb).toBeTruthy();
  });

  it('the "after initialization" handler sets the x and y position of the HTML element', () => {
    // the UI element gets its position from the item to start
    component.ngAfterViewInit();
    const compiled = fixture.nativeElement;
    const itemEle = compiled.querySelector('.item');
    expect(component.item.x).toEqual(parseInt(itemEle.style.left, 10));
    expect(component.item.y).toEqual(parseInt(itemEle.style.top, 10));
  
    component.item.x = 200;
    component.item.y = 200;
    component.ngAfterViewInit();
    expect(component.item.x).toEqual(parseInt(itemEle.style.left, 10));
    expect(component.item.y).toEqual(parseInt(itemEle.style.top, 10));

  });

  it('the "after initialization" handler sets the HTML element to draggable', () => {
    component.ngAfterViewInit();
    const compiled = fixture.nativeElement;
    const itemEle = compiled.querySelector('.item');
    expect(component.item.draggable.toString()).toEqual(itemEle.getAttribute("draggable"));
  });

  it('the "after initialization" handler sets the item to connected', () => {
    component.ngAfterViewInit();
    expect(component.item.connected).toEqual(true);
  });

  it('takes the position from the item and applies the position to the HTML element', () => {
    const ele = fixture.nativeElement.querySelector('.item');
    const item = component.item;

    item.x = 100;
    item.y = 100;
    ele.style.left = '100px';
    ele.style.top = '100px';

    component.setElePosition(item, ele);
    expect(component.item.x).toEqual(parseInt(ele.style.left, 10));
    expect(component.item.y).toEqual(parseInt(ele.style.top, 10));
   
    item.x = 500;
    item.y = 500;

    expect(component.item.x).not.toEqual(parseInt(ele.style.left, 10));
    expect(component.item.y).not.toEqual(parseInt(ele.style.top, 10));

    component.setElePosition(item, ele);

    expect(component.item.x).toEqual(parseInt(ele.style.left, 10));
    expect(component.item.y).toEqual(parseInt(ele.style.top, 10));
  });

  it('takes the position from the HTML element and applies the position to the item', () => {
    const ele = fixture.nativeElement.querySelector('.item');
    const item = component.item;
    item.x = 100;
    item.y = 100;
    ele.style.left = '100px';
    ele.style.top = '100px';
  
    item.ele = ele;
    component.setItemPosition(item);
    expect(component.item.x).toEqual(parseInt(ele.style.left, 10));
    expect(component.item.y).toEqual(parseInt(ele.style.top, 10));
   
    item.x = 500;
    item.y = 500;

    expect(component.item.x).not.toEqual(parseInt(ele.style.left, 10));
    expect(component.item.y).not.toEqual(parseInt(ele.style.top, 10));

    component.setItemPosition(item);

    expect(component.item.x).toEqual(parseInt(ele.style.left, 10));
    expect(component.item.y).toEqual(parseInt(ele.style.top, 10));
  }); 

  it('click handler update the item position based on the elements position', () => {
    const ele = fixture.nativeElement.querySelector('.item');
    const item = component.item;
    item.x = 100;
    item.y = 100;
    ele.style.left = '100px';
    ele.style.top = '100px';
    item.ele = ele;
    component.itemClicked();
    expect(component.item.x).toEqual(parseInt(ele.style.left, 10));
    expect(component.item.y).toEqual(parseInt(ele.style.top, 10));
   
    ele.style.left = '500px';
    ele.style.top = '500px';

    expect(component.item.x).not.toEqual(parseInt(ele.style.left, 10));
    expect(component.item.y).not.toEqual(parseInt(ele.style.top, 10));

    component.itemClicked();

    expect(component.item.x).toEqual(parseInt(ele.style.left, 10));
    expect(component.item.y).toEqual(parseInt(ele.style.top, 10));
  }); 

});
