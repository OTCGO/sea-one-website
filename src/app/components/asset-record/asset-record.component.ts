import { Component, OnInit } from '@angular/core';
// import { AssetMyRecord, AssetMarketRecord } from '../../models'

@Component({
  selector: 'app-asset-record',
  templateUrl: './asset-record.component.html',
  styleUrls: ['./asset-record.component.scss']
})
export class AssetRecordComponent implements OnInit {
  myRecords = [
    // new AssetMyRecord(1, 1, 1, 1, 1),
    // new AssetMyRecord(1, 1, 1, 1, 1),
    // new AssetMyRecord(1, 1, 1, 1, 1)
  ];

  marketRecords = [
    // new AssetMarketRecord(1, 1, 1, 1, '2018-04-29', '11:11:11'),
    // new AssetMarketRecord(1, 1, 1, 1, '2018-04-29', '11:11:11'),
    // new AssetMarketRecord(1, 1, 1, 1, '2018-04-29', '11:11:11'),
    // new AssetMarketRecord(1, 1, 1, 1, '2018-04-29', '11:11:11'),
    // new AssetMarketRecord(1, 1, 1, 1, '2018-04-29', '11:11:11'),
    // new AssetMarketRecord(1, 1, 1, 1, '2018-04-29', '11:11:11'),
    // new AssetMarketRecord(1, 1, 1, 1, '2018-04-29', '11:11:11'),
    // new AssetMarketRecord(1, 1, 1, 1, '2018-04-29', '11:11:11'),
    // new AssetMarketRecord(1, 1, 1, 1, '2018-04-29', '11:11:11'),
    // new AssetMarketRecord(1, 1, 1, 1, '2018-04-29', '11:11:11'),
    // new AssetMarketRecord(1, 1, 1, 1, '2018-04-29', '11:11:11')
  ];

  constructor() { }

  ngOnInit() {
  }

}
