import { Component, OnInit, ViewEncapsulation} from '@angular/core';
// import { AssetTradeRecord } from '../../models';

@Component({
  selector: 'app-asset-trade',
  templateUrl: './asset-trade.component.html',
  styleUrls: ['./asset-trade.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AssetTradeComponent implements OnInit {

  records = [
    // new AssetTradeRecord (1, 0.0001, 'NEO', 666),
    // new AssetTradeRecord (2, 0.0001, 'NEO', 666),
    // new AssetTradeRecord (3, 0.0001, 'NEO', 666),
    // new AssetTradeRecord (4, 0.0001, 'NEO', 666),
    // new AssetTradeRecord (5, 0.0001, 'NEO', 666),
    // new AssetTradeRecord (6, 0.0001, 'NEO', 666),
    // new AssetTradeRecord (7, 0.0001, 'NEO', 666),
    // new AssetTradeRecord (8, 0.0001, 'NEO', 666),
    // new AssetTradeRecord (9, 0.0001, 'NEO', 666),
    // new AssetTradeRecord (10, 0.0001, 'NEO', 666),
    // new AssetTradeRecord (11, 0.0001, 'NEO', 666),
    // new AssetTradeRecord (12, 0.0001, 'NEO', 666),
    // new AssetTradeRecord (13, 0.0001, 'NEO', 666),
    // new AssetTradeRecord (14, 0.0001, 'NEO', 666)
  ];

  constructor() { }

  ngOnInit() {
  }

}
