import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { WalletBonusDetailItem } from '../../models'

@Component({
  selector: 'app-wallet-bonus-detail',
  templateUrl: './wallet-bonus-detail.component.html',
  styleUrls: ['./wallet-bonus-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WalletBonusDetailComponent implements OnInit {

  items = [
    // new WalletBonusDetailItem(45.00, 'NEO', '小蚁股NEO', 8888.88, 0.25, 35.00, 25.00, '3个月前'),
    // new WalletBonusDetailItem(45.00, 'NEO', '小蚁股NEO', 8888.88, 0.25, 35.00, 25.00, '3个月前'),
    // new WalletBonusDetailItem(45.00, 'NEO', '小蚁股NEO', 8888.88, 0.25, 35.00, 25.00, '3个月前'),
    // new WalletBonusDetailItem(45.00, 'NEO', '小蚁股NEO', 8888.88, 0.25, 35.00, 25.00, '3个月前'),
    // new WalletBonusDetailItem(45.00, 'NEO', '小蚁股NEO', 8888.88, 0.25, 35.00, 25.00, '3个月前'),
    // new WalletBonusDetailItem(45.00, 'NEO', '小蚁股NEO', 8888.88, 0.25, 35.00, 25.00, '3个月前'),
    // new WalletBonusDetailItem(45.00, 'NEO', '小蚁股NEO', 8888.88, 0.25, 35.00, 25.00, '3个月前'),
    // new WalletBonusDetailItem(45.00, 'NEO', '小蚁股NEO', 8888.88, 0.25, 35.00, 25.00, '3个月前'),
    // new WalletBonusDetailItem(45.00, 'NEO', '小蚁股NEO', 8888.88, 0.25, 35.00, 25.00, '3个月前')
  ];

  constructor() { }

  ngOnInit() {
  }

}
