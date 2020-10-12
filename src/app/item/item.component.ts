import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { PlumbService } from '../services/plumb.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, AfterViewInit {

  @Input() item: Item;
  jsPlumb: any;
  itemId = '';

  constructor(
    private elementRef: ElementRef,
    private plumbService: PlumbService
    ) {
    this.jsPlumb = plumbService.getPlumb();
  }

  ngOnInit(): void {
    this.itemId = this.item.name.replace(/\W/g, '-') + this.item.level;
  }

  ngAfterViewInit(): void {
    const nativeEle = this.elementRef.nativeElement.firstChild as HTMLElement;
    this.setElePosition(nativeEle);
    this.plumbService.setDraggable(this.item, nativeEle);
    this.plumbService.connectParent(this.item);
  }

  setElePosition(ele: HTMLElement) {
    ele.style.left = this.item.x + 'px';
    ele.style.top = this.item.y + 'px';
  }

  itemClicked(): void {
    this.setItemPosition(this.item);
    this.plumbService.updateItem(this.item);
  }

  setItemPosition(item: Item) {
    item.x = Number.parseInt(this.item.ele.style.left, 10);
    item.y = Number.parseInt(this.item.ele.style.top, 10);
  }

}
