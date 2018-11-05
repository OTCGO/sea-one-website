import {Component, OnInit, ViewEncapsulation, EventEmitter, Output} from '@angular/core';
import { Store } from '@ngrx/store';
import { getWalletState, getBalanceState } from '../../selectors';


@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserMenuComponent implements OnInit {
@Output() closeMenu = new EventEmitter<boolean>();

  address: String;
  constructor(private store$: Store<any>, ) {
  }

  ngOnInit() {

    this.store$.select(getWalletState).subscribe(async val => {
      console.log('UserMenuComponent', val);
      this.address = val.address;

    });
  }
  close() {
    this.closeMenu.emit();
  }
}
