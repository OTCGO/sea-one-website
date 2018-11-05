import {Component, OnInit} from '@angular/core';
import {Block, Wallet} from '../../models';
import {LoggerService} from '../../shared';
import {Store, select} from '@ngrx/store';
import {Observable, interval, timer} from 'rxjs';
import {WalletActions, BlockActions, BalanceActions} from '../../actions';
import {switchMap, scan, merge} from 'rxjs/operators';
import {environment} from '../../../environments/environment.prod';
import {getBlockState} from '../../selectors';
import {getWif} from '../../shared/utils';
import {wallet} from '@cityofzion/neon-js';


@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
  block: Observable<any>;
  timer: Observable<number>;
  isLogin: Boolean;
  isRegister: Boolean;
  isShowMenu: Boolean;

  constructor(private logger: LoggerService, private store$: Store<any>) {
  }

  async ngOnInit() {
    this.logger.invokeConsoleMethod('info', 'HomeHeaderComponent: ngOnInit');
    this.isLogin = false;
    this.isRegister = false;
    this.isShowMenu = false;

    // block height && timer
    // Observable.interval(2000)


    this.store$.dispatch(new BlockActions.BlockHeight());

    this.store$.select(getBlockState).subscribe(val => console.log('height1', val));


    this.block = this.store$.select(getBlockState);

  }

  loginSuccess() {
    this.isLogin = false;
    this.isShowMenu = true;
  }

  closeMenu() {
    this.isShowMenu = false;
  }

  closeModal() {
    this.isRegister = false;
  }

  closeLogin() {
    this.isLogin = false;
  }
}
