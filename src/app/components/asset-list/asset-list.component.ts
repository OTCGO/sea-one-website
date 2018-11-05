import { Component, OnInit, Input } from '@angular/core';
import { Asset } from '../../models/asset.model';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {

  @Input() assets: Array<Asset>;

  constructor() { }

  ngOnInit() {
  }

}
