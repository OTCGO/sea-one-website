import { NgModule } from '@angular/core';
import { ElModule } from 'element-angular';
import { CommonModule } from '@angular/common';
import { AssetRoutingModule } from './asset-routing.module';

import { AssetDetailPageComponent } from '../../containers/asset/detail/detail.component';
import { AssetListPageComponent } from '../../containers/asset/list/list.component';

import { AssetListComponent } from '../../components/asset-list/asset-list.component';
import { AssetInfoComponent } from '../../components/asset-info/asset-info.component';
import { AssetNavComponent } from '../../components/asset-nav/asset-nav.component';
import { AssetMenuComponent } from '../../components/asset-menu/asset-menu.component';
import { AssetMarketComponent } from '../../components/asset-market/asset-market.component';
import { AssetRiskComponent } from '../../components/asset-risk/asset-risk.component';
import { AssetOwnComponent } from '../../components/asset-own/asset-own.component';
import { AssetTradeComponent } from '../../components/asset-trade/asset-trade.component';
import { AssetIntroComponent } from '../../components/asset-intro/asset-intro.component';
import { AssetRecordComponent } from '../../components/asset-record/asset-record.component';



@NgModule({
    imports: [
        CommonModule,
        AssetRoutingModule,
        ElModule.forRoot(),
    ],
    declarations: [
        AssetDetailPageComponent,
        AssetListPageComponent,

        AssetListComponent,
        AssetInfoComponent,
        AssetNavComponent,
        AssetMenuComponent,
        AssetMarketComponent,
        AssetRiskComponent,
        AssetOwnComponent,
        AssetTradeComponent,
        AssetIntroComponent,
        AssetRecordComponent
    ],
    exports: [
        AssetDetailPageComponent,
        AssetListPageComponent,

        AssetListComponent,
        AssetInfoComponent,
        AssetNavComponent,
        AssetMenuComponent,
        AssetMarketComponent,
        AssetRiskComponent,
        AssetOwnComponent,
        AssetTradeComponent,
        AssetIntroComponent,
        AssetRecordComponent
    ],
    providers: []
})
export class AssetModule {}
