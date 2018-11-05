import { Component, OnInit } from '@angular/core';
import { Asset } from '../../../models';
import { LoggerService } from '../../../shared';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { AppState } from '../../../reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class AssetListPageComponent implements OnInit {
  assets = [];
  // assets = [
  //   new Asset(1, 'NEO', '小蚁股', '一种智能经济分布式网络', 2.32, 321.12, 1, 12.11),
  //   new Asset(1, 'NEO', '小蚁股', '一种智能经济分布式网络', 2.32, 321.12, 1, 12.11),
  //   new Asset(1, 'NEO', '小蚁股', '一种智能经济分布式网络', 2.32, 321.12, 1, 12.11),
  //   new Asset(1, 'NEO', '小蚁股', '一种智能经济分布式网络', 2.32, 321.12, 1, 12.11),
  //   new Asset(1, 'NEO', '小蚁股', '一种智能经济分布式网络', 2.32, 321.12, 1, 12.11),
  //   new Asset(1, 'NEO', '小蚁股', '一种智能经济分布式网络', 2.32, 321.12, 1, 12.11),
  //   new Asset(1, 'NEO', '小蚁股', '一种智能经济分布式网络', 2.32, 321.12, 1, 12.11),
  //   new Asset(1, 'NEO', '小蚁股', '一种智能经济分布式网络', 2.32, 321.12, 1, 12.11),
  //   new Asset(1, 'NEO', '小蚁股', '一种智能经济分布式网络', 2.32, 321.12, 1, 12.11),
  //   new Asset(1, 'NEO', '小蚁股', '一种智能经济分布式网络', 2.32, 321.12, 1, 12.11)
  // ];

  constructor(private logger: LoggerService, private store$: Store<any>) { }

  ngOnInit() {
  }

}
