import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item';
import { PlumbService } from '../services/plumb.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: BehaviorSubject<Item[]>;
  itemList: Item[] = [];

  constructor(private plumbService: PlumbService) { }

  ngOnInit(): void {
    this.items = this.plumbService.items;
    this.plumbService.items.subscribe(this.setList.bind(this));
  }

  setList(list: Item[]): void {
    this.itemList = list;
  }

}
