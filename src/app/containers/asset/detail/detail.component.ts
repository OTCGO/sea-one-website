import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../models/menu.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class AssetDetailPageComponent implements OnInit {

menuIdx = 3;

  menus: Menu[] = [
    // new Menu("市场走势"),
    // new Menu("交易委托"),
    // new Menu("代币详情"),
    // new Menu("交易记录")
  ];

  constructor() { }

  ngOnInit() {
  }

}
