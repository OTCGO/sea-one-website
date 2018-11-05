import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlockService, WalletService } from '../../shared';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getWalletState, getBalanceState } from '../../selectors';
import { wallet } from '@cityofzion/neon-js';
import { NEO_HASH, ONG_HASH, ONT_HASH } from '../../constants';
import { ElMessageService } from 'element-angular';
import { Bonus } from '../../models';

@Component({
  selector: 'app-wallet-bonus-total',
  templateUrl: './wallet-bonus-total.component.html',
  styleUrls: ['./wallet-bonus-total.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WalletBonusTotalComponent implements OnInit {

  gasBonus: Bonus = new Bonus();
  ongBonus: Bonus  = new Bonus();
  address: String;
  ongBalance;
  ontBalance;
  neoBalance;
  btnDisable = true;


  constructor(private blockService: BlockService, private store$: Store<any>, private walletService: WalletService,
    private message: ElMessageService) { }

  ngOnInit() {

    this.store$.select(getWalletState).subscribe(async val => {
      console.log('WalletBonusTotalComponent', val);
      this.address = val.address;
      if (this.address) {
        this.gasBonus = await this.blockService.getBonus(this.address);
        this.ongBonus = await this.blockService.getBonusOnt(this.address);
      }
    });


    this.store$.select(getBalanceState).subscribe(async balance => {
      console.log('balance', balance);

      const result = (<any>balance).find(bal => bal.hash === ONG_HASH);
      this.ontBalance = (<any>balance).find(bal => bal.hash === ONT_HASH);
      this.neoBalance = (<any>balance).find(bal => bal.hash === NEO_HASH);
      console.log('ONG', result);

      this.ongBalance = result;


      if (result < 0.01) {
        this.btnDisable = true;
      }

      if (result >= 0.02) {
        this.btnDisable = false;

      }
      if (0.01 <= result && result < 0.02) {
        this.btnDisable = false;
      }

    });



  }

  extractGas() {


    console.log('extractGass');
    this.store$.select(getWalletState).subscribe(async val => {


        try {


          if (parseFloat(this.gasBonus.available) > 0) {
            const result = await this.pick(val.privateKey, val.publicKey);

            if (!result['result']) {
              return this.message['error']('提取失败');
            }
          }


          if (parseFloat(this.gasBonus.unavailable) > 0) {
            const result = await this.tran(val.address, val.privateKey, val.publicKey);

            if (!result['result']) {
              return this.message['error']('提取失败');
            }
          }

          return this.message['success']('提取成功');

        } catch (error) {
          console.error('extractGas', error);
          return this.message['error']('提取失败');
        }

    });



    // this.store$.select(getWalletState).subscribe(async val => {

    //   try {




    //     if ((<any>val).unavailable === '0') {
    //       const result = await this.pick(val.privateKey, val.publicKey);

    //       if (result['result']) {
    //         return this.message['success']('提取成功');

    //       }
    //       return this.message['error']('提取失败');
    //     }

    //     if ((<any>val).available === '0') {
    //       const result = await this.tran(val.address, val.privateKey, val.publicKey);

    //       if (result['result']) {
    //         return this.message['success']('提取成功');
    //       }
    //       return this.message['error']('提取失败');
    //     }


    //     const res2 = await this.tran(val.address, val.privateKey, val.publicKey);
    //     console.log('res2', res2);
    //     if (!res2['result']) {
    //       return this.message['error']('提取失败');
    //     }


    //     const res1 = await this.pick(val.privateKey, val.publicKey);
    //     if (!res1['result']) {
    //       return this.message['error']('提取失败');
    //     }

    //     return this.message['success']('提取成功');
    //     //

    //   } catch (error) {
    //     console.error('error', error);
    //     return this.message['error']('提取失败');
    //   }
    // });

  }

  extractOng() {
    console.log('extractOng');

    this.store$.select(getWalletState).subscribe(async val => {


        console.log('bonus', this.ongBalance);
        try {
          if (this.ongBalance.amount < 0.01) {
            return this.message['error']('ONG余额不足');
          }

          // 0.02
          if (this.ongBalance.amount >= 0.02) {

            if (parseFloat(this.ongBonus.available) > 0) {
              const result = await this.tran(val.address, val.privateKey, val.publicKey);

              if (!result['result']) {
                return this.message['error']('提取失败');
              }
            }


            if (parseFloat(this.ongBonus.unavailable) > 0) {
              const result = await this.pick(val.privateKey, val.publicKey);
              if (!result['result']) {
                return this.message['error']('提取失败');
              }
            }





            return this.message['success']('提取成功');
          } else if (this.ongBalance.amount >= 0.01 && this.ongBalance.amount < 0.02) {
            // 提取
            if (parseFloat(this.ongBonus.available) > 0) {
              const result = await this.pick(val.privateKey, val.publicKey);

              if (result['result']) {
                return this.message['success']('提取成功');
              }
            }

            // 转账
            if (parseFloat(this.ongBonus.unavailable) > 0) {
              const result = await this.tran(val.address, val.privateKey, val.publicKey);

              if (result['result']) {
                return this.message['success']('提取成功');
              }
            }
          }

        } catch (error) {
          console.error('extractOng', error);
          return this.message['error']('提取失败');
        }
      });




    /*
    this.store$.select(getWalletState).subscribe(async val => {

      console.log('this.ongBalance', this.ongBalance);
      try {

        if (0.01 <= this.ongBalance && this.ongBalance < 0.02) {
          // 可提取为
          if ((<any>val).available > 0) {
            const result = await this.pickOng(val.privateKey, val.publicKey);

            if (result['result']) {
              return this.message['success']('提取成功');

            }
            return this.message['error']('提取失败');
          } else {

            // 不可提取为0   没有ont 不转账
            if ((<any>val).unavailable === '0') {
              // return Promise.resolve(true);
            } else {
              const result = await this.tranOng(val.address, val.privateKey, val.publicKey);

              if (result['result']) {
                return this.message['success']('提取成功');
              }
              return this.message['error']('提取失败');
            }

          }

        }


        const res2 = await this.tranOng(val.address, val.privateKey, val.publicKey);
        console.log('res2', res2);
        if (!res2['result']) {
          return this.message['error']('提取失败');
        }




        const res1 = await this.pickOng(val.privateKey, val.publicKey);
        console.log('res1', res1);
        if (!res1['result']) {
          return this.message['error']('提取失败');
        }

        return this.message['success']('提取成功');


      } catch (error) {
        console.error('error', error);
        return this.message['error']('提取失败');
      }
    });

    */


  }


  // 可提取变余额 gas
  async  pick(pr, publicKey) {
    const result: any = await this.walletService.bonusGas({ publicKey });
    console.log('result', result);
    const signature = await wallet.generateSignature(result.transaction, pr);
    // console.log(signature)
    const res = await this.walletService.broadTransfer({ signature, publicKey, transaction: result.transaction });
    console.log('pick', res);
    return res;

  }

  // // 不可提取 到 可提取 gas
  async  tran(address, pr, publicKey) {
    // transfer
    const data = {
      dests: address,
      amounts: this.neoBalance.amount,
      assetId: NEO_HASH,
      source: address
    };
    const result = await this.walletService.buildTransfer(data);
    const signature = await wallet.generateSignature(result.transaction, pr);
    const res = await this.walletService.broadTransfer({ signature, publicKey, transaction: result.transaction });
    console.log('res', res);
    return res;
  }


  // 可提取变余额 ong
  async  pickOng(pr, publicKey) {
    const result: any = await this.walletService.bonusOng({ publicKey });
    console.log('result', result);
    const signature = await wallet.generateSignature(result.sigdata, pr);
    // console.log(signature)
    const res = await this.walletService.broadTransferOnt({ signature, publicKey, transaction: result.transaction });
    console.log('pickOng res', res);
    return res;

  }

  // // 不可提取 到 可提取 ong
  async  tranOng(address, pr, publicKey) {

    // transfer
    const data = {
      dests: address,
      amounts: this.ontBalance.amount,
      assetId: ONT_HASH,
      source: address
    };

    const result = await this.walletService.buildTransferOnt(data);
    const signature = await wallet.generateSignature(result.sigdata, pr);
    const res = await this.walletService.broadTransferOnt({ signature, publicKey, transaction: result.transaction });
    console.log('res', res);
    return res;

  }


}
