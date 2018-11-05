import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { WalletAssetPageComponent } from './asset/asset.component';
import { WalletTradePageComponent } from './trade/trade.component';
import { WalletTokenPageComponent } from './token/token.component';

import { WalletBonusTotalPageComponent } from '../bonus/total/total.component';
import { WalletBonusDetailPageComponent } from '../bonus/detail/detail.component';
import { WalletBonusWithdrawPageComponent } from '../bonus/withdraw/withdraw.component';



export const routes: Routes = [
    {
        path: 'asset',
        component: WalletAssetPageComponent
    },
    {
        path: 'trade',
        component: WalletTradePageComponent
    },
    {
        path: 'token',
        component: WalletTokenPageComponent
    },
    {
        path: 'bonus/total',
        component: WalletBonusTotalPageComponent
    },
    {
        path: 'bonus/detail',
        component: WalletBonusDetailPageComponent
    },
    {
        path: 'bonus/withdraw',
        component: WalletBonusWithdrawPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class WalletRoutingModule {}

