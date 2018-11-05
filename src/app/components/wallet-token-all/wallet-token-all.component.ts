import { Component, OnInit, ViewEncapsulation, forwardRef, Inject, } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BalanceActions } from '../../actions';
import { getWalletState, getBalanceState } from '../../selectors';
import { wallet } from '@cityofzion/neon-js';
import { NEO_HASH, ONG_HASH, ONT_HASH } from '../../constants';
import { ElMessageService } from 'element-angular';
import { BlockService, WalletService } from '../../shared';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

interface ValidateResult {
  status: string;
  message?: string;
}


@Component({
  selector: 'app-wallet-token-all',
  templateUrl: './wallet-token-all.component.html',
  styleUrls: ['./wallet-token-all.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WalletTokenAllComponent implements OnInit {


  transalteForm: FormGroup;

  balance: Observable<any>;
  // assets: WalletTokenAllItem[] = [
  //   new WalletTokenAllItem('NEO', 1, 1, 1),
  //   new WalletTokenAllItem('GAS', 1, 1, 1),
  //   new WalletTokenAllItem('开拍学院币(KAC)', 1, 1, 1),
  //   new WalletTokenAllItem('申一币', 1, 1, 1),
  //   new WalletTokenAllItem('申一股份', 1, 1, 1),
  //   new WalletTokenAllItem('量子积分', 1, 1, 1),
  //   new WalletTokenAllItem('量子币', 1, 1, 1)
  // ];
  translateIng: Boolean = false;
  toggleTypeList: Boolean = false;
  ongBalance;
  seleteHash;
  seleteName;
  seleteAmounts;
  address;


  constructor(private blockService: BlockService, private store$: Store<any>, private walletService: WalletService,
    private message: ElMessageService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    try {


      this.store$.select(getWalletState).subscribe(val => {
        console.log('WalletBonusTotalComponent', val);
        this.address = val.address;
        if (this.address) {
          this.store$.dispatch(new BalanceActions.Load(this.address));
          this.balance = this.store$.select(getBalanceState);

          this.balance.subscribe(balance => {
            console.log('balance', balance);

            const ongBalance = (<any>balance).find(bal => bal.hash === ONG_HASH);
            this.ongBalance = ongBalance;

          });
        }
      });



      this.transalteForm = this.formBuilder.group({
        amounts: ['', [Validators.required, this.amoutsValidator]],
        address1: ['', [Validators.required], [this.addressValidator.bind(this)]],
        address2: ['', [this.address2Validator]],
      });

    } catch (error) {
      console.log('error', error);
    }

  }
  async address2Validator(control: FormControl) {
    if (!control.value) {
      return { status: 'error', message: '必须地址' };
    }
    return { status: 'success' };

  }

  async addressValidator(control: FormControl) {
    console.log('addressValidator');
    // const address = this.transalteForm.get('address1').value;
    const address = control.value;

    if (!address) {
      return { status: 'error', message: '必须地址' };
    }

    if (/.neo/i.test(address)) {
      const result = await this.blockService.getNncAddress(address);
      if (result) {
        await this.transalteForm.get('address2').setValue(result['address']);
        return { status: 'success' };
      } else {
        return { status: 'error', message: '找不到对应域名地址' };
      }
    }


    if (!wallet.isAddress(address)) {
      return { status: 'error', message: '错误地址' };
    }


    await this.transalteForm.get('address2').setValue(address);


    return { status: 'success' };

  }


  openTranslate(hash, name, amounts) {
    console.log('openTranslate', hash);

    this.transalteForm.reset();

    this.seleteHash = hash;
    this.seleteName = name;
    if (hash === ONG_HASH) {
      this.seleteAmounts = amounts - 0.01;
    } else {
      this.seleteAmounts = amounts;
    }

    this.translateIng = true;


  }

  btnTranslate() {
    console.log('btnTranslate');

    for (const item in this.transalteForm.controls) {
      // console.log('item', item);
      // console.log('item', item['errors']['status']);
      if (this.transalteForm.controls[item].hasOwnProperty('errors')) {
       console.log(item, this.transalteForm.controls[item]['errors']['status']);
       if (this.transalteForm.controls[item]['errors']['status'] === 'error' ) {
          return ;
       }
      }
    }


    this.store$.select(getWalletState).subscribe(async val => {
      try {


        if (this.seleteHash === ONG_HASH || this.seleteHash === ONT_HASH) {

          console.log('btnTranslate', this.seleteHash);
          // ong < 0.01; 不能转账;
          if (this.ongBalance.amount < 0.01) {
            return this.message['error']('ONG余额不足');
          }


          const result = await this.tranOnt(val.address, val.privateKey, val.publicKey);

          if (result['result']) {
            return this.message['success']('转账成功');
          }
          return this.message['error']('转账失败');
        } else {
          const result = await this.tran(val.address, val.privateKey, val.publicKey);

          if (result['result']) {
            return this.message['success']('转账成功');
          }
          return this.message['error']('转账失败');
        }

      } catch (error) {
        console.log('error', error);
        return this.message['error']('转账失败');
      }

    });
  }

  // // neo  转账
  async  tran(address, pr, publicKey) {

    // console.log('this.transalteForm', this.transalteForm);

    // transfer
    const data = {
      dests: this.transalteForm.get('address2').value, // 目标地址
      amounts: this.transalteForm.get('amounts').value,
      assetId: this.seleteHash,
      source: address
    };
    const result = await this.walletService.buildTransfer(data);
    const signature = await wallet.generateSignature(result.transaction, pr);
    const res = await this.walletService.broadTransfer({ signature, publicKey, transaction: result.transaction });
    console.log('res', res);
    return res;


  }



  // // ont 转账
  async  tranOnt(address, pr, publicKey) {

    // transfer
    const data = {
      dests: this.transalteForm.get('address2').value, // 目标地址
      amounts: this.transalteForm.get('amounts').value,
      assetId: this.seleteHash,
      source: address
    };

    const result = await this.walletService.buildTransferOnt(data);
    const signature = await wallet.generateSignature(result.sigdata, pr);
    const res = await this.walletService.broadTransferOnt({ signature, publicKey, transaction: result.transaction });
    console.log('res', res);
    return res;

  }

  statusCtrl(item) {
    if (!this.transalteForm.controls[item]) { return; }
    const control: AbstractControl = this.transalteForm.controls[item];
    return control.dirty && control.hasError('status') ? control.errors.status : '';
  }
  messageCtrl(item) {
    if (!this.transalteForm.controls[item]) { return; }
    const control: AbstractControl = this.transalteForm.controls[item];
    return control.dirty && control.hasError('message') ? control.errors.message : '';
  }


  private amoutsValidator = (control: FormControl): ValidateResult => {
    if (!control.value) {
      return { status: 'error', message: '必须填写数量' };
    }
    console.log('control.value', control.value);
    console.log('this.seleteAmounts', this.seleteAmounts);
    if (parseFloat(control.value)  > parseFloat(this.seleteAmounts)) {
      return { status: 'error', message: '数量错误' };
    }
    return { status: 'success' };
  }
}
