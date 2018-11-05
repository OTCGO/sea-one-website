import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../../models/menu.model';

@Component({
  selector: 'app-asset-menu',
  templateUrl: './asset-menu.component.html',
  styleUrls: ['./asset-menu.component.scss']
})
export class AssetMenuComponent implements OnInit {

  @Input() menuIdx: Number = 0;
  @Input() menus: Array<Menu>;

  constructor() { }

  ngOnInit() {
  }

}
