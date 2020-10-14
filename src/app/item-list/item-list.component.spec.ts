import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockPlumbService } from 'src/mocks/mock-plumb.service';
import { PlumbService } from '../services/plumb.service';
import { ItemListComponent } from './item-list.component';
import { ItemComponent } from '../item/item.component';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;
  const mockPlumbService = new MockPlumbService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ItemListComponent,
        ItemComponent
      ],
      providers: [ 
        {
          provide: PlumbService, 
          useClass: MockPlumbService,
        } 
      ],
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initialization handler should set items', () => {
    component.ngOnInit();
    expect(component.items).toBeTruthy();
  });

  it('set list callback function should set the list', () => {
    component.itemList = [];
    expect(component.itemList.length).toEqual(0); 
    const items = mockPlumbService.getItems();
    component.setList(items);
    expect(items.length).toEqual(component.itemList.length);

  });
});
