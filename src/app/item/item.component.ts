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
  itemId = "";

  constructor(
    private elementRef: ElementRef, 
    private plumbService: PlumbService
    ) {
    this.jsPlumb = plumbService.getPlumb();
  }

  ngOnInit(): void {
    this.itemId = this.item.name.replace(/\W/g,'-') + this.item.level;
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement;
    this.plumbService.setDraggable(this.item, this.elementRef.nativeElement.firstChild);
    this.plumbService.connectParent(this.item);
  }

  itemClicked(): void {
    console.log('ele-x', Number.parseInt(this.item.ele.style.left));
    console.log('ele-y', Number.parseInt(this.item.ele.style.top));
    this.item.x = Number.parseInt(this.item.ele.style.left);
    this.item.y = Number.parseInt(this.item.ele.style.top);
    this.plumbService.updateItem(this.item);
    console.log('clicked...', this.item);
  }

}
