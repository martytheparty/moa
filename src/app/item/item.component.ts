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
    this.elementRef.nativeElement.firstChild.style.left = this.item.x + 'px';
    this.elementRef.nativeElement.firstChild.style.top = this.item.y + 'px';
    this.plumbService.setDraggable(this.item, this.elementRef.nativeElement.firstChild);
    this.plumbService.connectParent(this.item);
  }

  itemClicked(): void {
    this.item.x = Number.parseInt(this.item.ele.style.left, 10);
    this.item.y = Number.parseInt(this.item.ele.style.top, 10);
    this.plumbService.updateItem(this.item);
  }

}
