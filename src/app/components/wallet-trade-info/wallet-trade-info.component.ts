import { Component, OnInit } from '@angular/core';
// import { WalletAssetInfoItem } from '../../models'

@Component({
  selector: 'app-wallet-trade-info',
  templateUrl: './wallet-trade-info.component.html',
  styleUrls: ['./wallet-trade-info.component.scss']
})
export class WalletTradeInfoComponent implements OnInit {

  items = [
    // new WalletAssetInfoItem(1, 11.01, 'K/NEO'),
    // new WalletAssetInfoItem(2, 11.01, 'K/NEO'),
    // new WalletAssetInfoItem(3, 11.01, 'K/NEO'),
    // new WalletAssetInfoItem(4, 11.01, 'K/NEO'),
    // new WalletAssetInfoItem(5, 11.01, 'K/NEO'),
    // new WalletAssetInfoItem(6, 11.01, 'K/NEO')
  ];

  itemIdx = 1;

  constructor() { }

  ngOnInit() {
  }

}
