import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { Item } from '../item-list/item';
import { PlumbService } from '../item-list/plumb.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, AfterViewInit {

  @Input() item:Item;
  jsPlumb: any;
  window: Window;
  itemId = "";

  constructor(
    private elementRef: ElementRef, 
    private itemListService: PlumbService
    ) {
    this.jsPlumb = itemListService.getPlumb();
  }

  ngOnInit(): void {
    this.itemId = this.item.name.replace(/\W/g,'-') + this.item.level;
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement;
    this.itemListService.setDraggable(this.item, this.elementRef.nativeElement.firstChild);
    this.itemListService.connectParent(this.item);
  }

  itemClicked(): void {
    console.log('clicked...', this.item);
  }

}
