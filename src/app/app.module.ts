import { BrowserModule , BrowserTransferStateModule} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './routes';
import { AdminComponent } from './containers/admin/admin.component';
import { FooterComponent, HeaderComponent } from './containers/layout';
import {
  SharedModule,
  ApiService,
  JwtService,
  ConsoleLoggerService,
  LoggerService,
  BlockService,
  WalletService,
  APIInterceptor
} from './shared';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
 import { BlockEffects, BalanceEffects  } from './effects/';
// -----------------------Page-----------------------
// import { HomeComponent } from './containers/home/home.component';
// import { AccountPageComponent } from './containers/account/account.component';

// import { AssetListPageComponent } from './containers/asset/list/list.component';
// import { AssetDetailPageComponent } from './containers/asset/detail/detail.component';

// import { WalletAssetPageComponent } from './containers/wallet/asset/asset.component';
// import { WalletTradePageComponent } from './containers/wallet/trade/trade.component';
// import { WalletTokenPageComponent } from './containers/wallet/token/token.component';

// import { WalletBonusTotalPageComponent } from './containers/bonus/total/total.component';
// import { WalletBonusDetailPageComponent } from './containers/bonus/detail/detail.component';
// import { WalletBonusWithdrawPageComponent } from './containers/bonus/withdraw/withdraw.component';

// ---------------------Component--------------------
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {UserMenuComponent} from './components/user-menu/user-menu.component';


// import { AssetListComponent } from './components/asset-list/asset-list.component';
// import { AssetInfoComponent } from './components/asset-info/asset-info.component';
// import { AssetNavComponent } from './components/asset-nav/asset-nav.component';
// import { AssetMenuComponent } from './components/asset-menu/asset-menu.component';
// import { AssetMarketComponent } from './components/asset-market/asset-market.component';
// import { AssetRiskComponent } from './components/asset-risk/asset-risk.component';
// import { AssetOwnComponent } from './components/asset-own/asset-own.component';
// import { AssetTradeComponent } from './components/asset-trade/asset-trade.component';
// import { AssetIntroComponent } from './components/asset-intro/asset-intro.component';
// import { AssetRecordComponent } from './components/asset-record/asset-record.component';

// import { WalletTitleComponent } from './components/wallet-title/wallet-title.component';
// import { WalletAssetTotalComponent } from './components/wallet-asset-total/wallet-asset-total.component';
// import { WalletAssetActionComponent } from './components/wallet-asset-action/wallet-asset-action.component';
// import { WalletTradeStatComponent } from './components/wallet-trade-stat/wallet-trade-stat.component';
// import { WalletTradeInfoComponent } from './components/wallet-trade-info/wallet-trade-info.component';
// import { WalletTradeRecordComponent } from './components/wallet-trade-record/wallet-trade-record.component';
// import { WalletTokenAllComponent } from './components/wallet-token-all/wallet-token-all.component';


// import { AccountMenuComponent } from './components/account-menu/account-menu.component';
// import { AccountDetailPersonalComponent } from './components/account-detail-personal/account-detail-personal.component';
// import { AccountDetailAvatarComponent } from './components/account-detail-avatar/account-detail-avatar.component';
// import { AccountSecurityEmailComponent } from './components/account-security-email/account-security-email.component';
// import { AccountSecurityMobileComponent } from './components/account-security-mobile/account-security-mobile.component';
// import { AccountSecurityPasswordComponent } from './components/account-security-password/account-security-password.component';
// import { AccountSecurityKeyComponent } from './components/account-security-key/account-security-key.component';
// import { AccountPrivacySettingComponent } from './components/account-privacy-setting/account-privacy-setting.component';
// import { AccountSubmenuComponent } from './components/account-submenu/account-submenu.component';
// import {AccountUserInfoComponent} from './components/account-user-info/account-user-info.component';


// import { WalletBonusTotalComponent } from './components/wallet-bonus-total/wallet-bonus-total.component';
// import { WalletBonusDetailComponent } from './components/wallet-bonus-detail/wallet-bonus-detail.component';
// import { WalletBonusWithdrawComponent } from './components/wallet-bonus-withdraw/wallet-bonus-withdraw.component';

// import element module
import { ElModule } from 'element-angular';
// import element style
// import 'element-angular/theme/index.css';

import { HttpClientModule, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './guard';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    UserMenuComponent,
    // -----------------------Page-----------------------
    AdminComponent,
    // HomeComponent,
    // AccountPageComponent,

    // AssetListPageComponent,
    // AssetDetailPageComponent,

    // WalletAssetPageComponent,
    // WalletTradePageComponent,
    // WalletTokenPageComponent,

    // WalletBonusTotalPageComponent,
    // WalletBonusDetailPageComponent,
    // WalletBonusWithdrawPageComponent,

    // ---------------------Component--------------------
    HomeHeaderComponent,
    HomeFooterComponent,




    // AssetListComponent,
    // AssetInfoComponent,
    // AssetNavComponent,
    // AssetMenuComponent,
    // AssetMarketComponent,
    // AssetRiskComponent,
    // AssetOwnComponent,
    // AssetTradeComponent,
    // AssetIntroComponent,
    // AssetRecordComponent,

    // WalletTitleComponent,
    // WalletAssetTotalComponent,
    // WalletAssetActionComponent,
    // WalletTradeStatComponent,
    // WalletTradeInfoComponent,
    // WalletTradeRecordComponent,
    // WalletTokenAllComponent,


    // AccountMenuComponent,
    // AccountDetailPersonalComponent,
    // AccountDetailAvatarComponent,
    // AccountSecurityEmailComponent,
    // AccountSecurityMobileComponent,
    // AccountSecurityPasswordComponent,
    // AccountSecurityKeyComponent,
    // AccountPrivacySettingComponent,
    // AccountSubmenuComponent,
    // AccountUserInfoComponent,
    // WalletBonusTotalComponent,
    // WalletBonusDetailComponent,
    // WalletBonusWithdrawComponent,
    // WalletNavComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    // BrowserModule, client
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([ BlockEffects, BalanceEffects ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    ElModule.forRoot(),
    ReactiveFormsModule,
    BrowserTransferStateModule

  ],
  exports: [
    RouterModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true },
              ApiService, JwtService,
              { provide: LoggerService, useClass: ConsoleLoggerService },
              BlockService, WalletService, AuthGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
