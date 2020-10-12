import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockPlumbService } from 'src/mocks/mock-plumb.service';
import { mockItems } from '../../mocks/mock-items';
import { PlumbService } from '../services/plumb.service';
import { ItemComponent } from './item.component';


describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
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
    component.item = mockItems[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
