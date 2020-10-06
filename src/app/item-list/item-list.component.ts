import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from './item';
import { PlumbService } from './plumb.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: BehaviorSubject<Item[]>;

  constructor(private plumbService: PlumbService) { }

  ngOnInit(): void {
    this.items = this.plumbService.items;
  }

}
