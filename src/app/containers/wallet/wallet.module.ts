import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletRoutingModule } from './wallet-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ElModule } from 'element-angular';
import { WalletAssetPageComponent } from './asset/asset.component';
import { WalletTradePageComponent } from './trade/trade.component';
import { WalletTokenPageComponent } from './token/token.component';



import { WalletTitleComponent } from '../../components/wallet-title/wallet-title.component';
import { WalletAssetTotalComponent } from '../../components/wallet-asset-total/wallet-asset-total.component';
import { WalletAssetActionComponent } from '../../components/wallet-asset-action/wallet-asset-action.component';
import { WalletTradeStatComponent } from '../../components/wallet-trade-stat/wallet-trade-stat.component';
import { WalletTradeInfoComponent } from '../../components/wallet-trade-info/wallet-trade-info.component';
import { WalletTradeRecordComponent } from '../../components/wallet-trade-record/wallet-trade-record.component';
import { WalletTokenAllComponent } from '../../components/wallet-token-all/wallet-token-all.component';
import { WalletBonusTotalComponent } from '../../components/wallet-bonus-total/wallet-bonus-total.component';
import { WalletBonusDetailComponent } from '../../components/wallet-bonus-detail/wallet-bonus-detail.component';
import { WalletBonusWithdrawComponent } from '../../components/wallet-bonus-withdraw/wallet-bonus-withdraw.component';
import { WalletNavComponent } from '../../components/wallet-nav/wallet-nav.component';
import { WalletBonusTotalPageComponent } from '../bonus/total/total.component';
import { WalletBonusDetailPageComponent } from '../bonus/detail/detail.component';
import { WalletBonusWithdrawPageComponent } from '../bonus/withdraw/withdraw.component';




@NgModule({
    imports: [
        CommonModule,
        WalletRoutingModule,
        ElModule.forRoot(),
        ReactiveFormsModule
    ],
    declarations: [
        WalletAssetPageComponent,
        WalletTradePageComponent,
        WalletTokenPageComponent,
        WalletBonusTotalPageComponent,
        WalletBonusDetailPageComponent,
        WalletBonusWithdrawPageComponent,

        WalletTitleComponent,
        WalletAssetTotalComponent,
        WalletAssetActionComponent,
        WalletTradeStatComponent,
        WalletTradeInfoComponent,
        WalletTradeRecordComponent,
        WalletTokenAllComponent,
        WalletBonusTotalComponent,
        WalletBonusDetailComponent,
        WalletBonusWithdrawComponent,
        WalletNavComponent
    ],
    exports: [
        WalletAssetPageComponent,
        WalletTradePageComponent,
        WalletTokenPageComponent,
        WalletBonusTotalPageComponent,
        WalletBonusDetailPageComponent,
        WalletBonusWithdrawPageComponent,
    ],
    providers: []
})
export class WalletModule {}
