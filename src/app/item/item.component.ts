import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { PlumbService } from '../services/plumb.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements  AfterViewInit {

  @Input() item: Item;
  jsPlumb: any;
  itemId = '';

  constructor(
    private elementRef: ElementRef,
    private plumbService: PlumbService
    ) {
    this.jsPlumb = plumbService.getPlumb();
  }

  ngAfterViewInit(): void {
    const nativeEle = this.elementRef.nativeElement.firstChild as HTMLElement;
    this.setElePosition(this.item, nativeEle);
    this.plumbService.attachElementToItem(this.item, nativeEle);
    this.plumbService.setDraggable(this.item, nativeEle);
    this.plumbService.connectParent(this.item);
  }

  setElePosition(item:Item, ele: HTMLElement) {
    ele.style.left = this.item.x + 'px';
    ele.style.top = this.item.y + 'px';
  }

  itemClicked(): void {
    this.setItemPosition(this.item);
    this.updateElementData(this.item);
  }

  setItemPosition(item: Item) {
    item.x = Number.parseInt(item.ele.style.left, 10);
    item.y = Number.parseInt(item.ele.style.top, 10);
  }

  updateElementData(item: Item): boolean {
    return this.plumbService.updateItem(this.item);
  }

}
