import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { PlumbService } from '../services/plumb.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements  AfterViewInit, OnInit {

  @Input() item: Item;
  jsPlumb: any;
  itemId = '';
  positioned = false;

  constructor(
    private elementRef: ElementRef,
    private plumbService: PlumbService
    ) {
    this.jsPlumb = plumbService.getPlumb();

  }

  ngOnInit(): void {
    this.itemId = 'item-'+this.item.id.toString();
  }

  ngAfterViewInit(): void {
    const nativeEle = this.elementRef.nativeElement.firstChild as HTMLElement;
    this.setElePosition(this.item, nativeEle);
    this.plumbService.attachElementToItem(this.item, nativeEle);
    this.plumbService.setDraggable(this.item, nativeEle);
    this.plumbService.connectParent(this.item);
    //this.positioned = true;
  }

  setElePosition(item: Item, ele: HTMLElement): void {
    ele.style.left = this.item.x + 'px';
    ele.style.top = this.item.y + 'px';
    ele.classList.add('positioned');
  }

  itemClicked(): void {
    this.setItemPosition(this.item);
    this.updateElementData(this.item);
  }

  setItemPosition(item: Item): void {
    item.x = Number.parseInt(item.ele.style.left, 10);
    item.y = Number.parseInt(item.ele.style.top, 10);
  }

  updateElementData(item: Item): boolean {
    return this.plumbService.updateItem(this.item);
  }

}
