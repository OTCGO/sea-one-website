import { Routes } from '@angular/router';
import { AuthGuard } from './guard';
// import { HomeComponent } from './containers/home/home.component';
// import { AdminComponent } from './containers/admin/admin.component';
// import { AssetDetailPageComponent } from './containers/asset/detail/detail.component';
// import { AssetListPageComponent } from './containers/asset/list/list.component';
// import { WalletAssetPageComponent } from './containers/wallet/asset/asset.component';
// import { WalletTradePageComponent } from './containers/wallet/trade/trade.component';
// import { WalletTokenPageComponent } from './containers/wallet/token/token.component';

// import { WalletBonusTotalPageComponent } from './containers/bonus/total/total.component';
// import { WalletBonusDetailPageComponent } from './containers/bonus/detail/detail.component';
// import { WalletBonusWithdrawPageComponent } from './containers/bonus/withdraw/withdraw.component';

// import { AccountPageComponent} from './containers/account/account.component';



export const routes: Routes = [
  {
    path: '',
    loadChildren: './containers/home/home.module#HomeModule'
  },
  // { path: 'home', component: HomeComponent },
  // {
  //   path: 'home',
  //   loadChildren: './containers/home/home.module#HomeModule'
  // },

  {
    path: 'account',
    loadChildren: './containers/account/account.module#AccountModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'wallet',
    loadChildren: './containers/wallet/wallet.module#WalletModule',
    canActivate: [AuthGuard]
  },

  {
    path: 'asset',
    loadChildren: './containers/asset/asset.module#AssetModule',
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  // { path: 'asset', redirectTo: '/asset/list', pathMatch: 'full'},
  //  { path: 'asset/list', component: AssetListPageComponent },
  // { path: 'asset/detail', component: AssetDetailPageComponent },

  // { path: 'account', component: AccountPageComponent },

  // { path: 'wallet/asset', component: WalletAssetPageComponent },
  // { path: 'wallet/trade', component: WalletTradePageComponent },
  //  { path: 'wallet/token', component: WalletTokenPageComponent },

  // { path: 'wallet/bonus/total', component: WalletBonusTotalPageComponent },
  // { path: 'wallet/bonus/detail', component: WalletBonusDetailPageComponent },
  // { path: 'wallet/bonus/withdraw', component: WalletBonusWithdrawPageComponent },

  // { path: 'admin', component: AdminComponent }
];
