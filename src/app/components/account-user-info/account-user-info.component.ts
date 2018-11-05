import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BalanceActions } from '../../actions';
import { getWalletState, getBalanceState } from '../../selectors';
import { wallet } from '@cityofzion/neon-js';
import { ElMessageService } from 'element-angular';
import { BlockService, WalletService } from '../../shared';


@Component({
  selector: 'app-account-user-info',
  templateUrl: './account-user-info.component.html',
  styleUrls: ['./account-user-info.component.scss']
})
export class AccountUserInfoComponent implements OnInit {

  address;
  publicKey;
  nep2;
  wif;
  constructor( private store$: Store<any>,
    private message: ElMessageService) { }

  ngOnInit() {
    this.store$.select(getWalletState).subscribe(info => {
      if (info) {
        this.address = info.address;
        this.publicKey = info.publicKey;
        this.nep2 = info.encrypted;
        this.wif = info.wif;
      }
    });
  }

}
