import { NgModule } from '@angular/core';
import { AccountPageComponent } from './account.component';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { AccountMenuComponent } from '../../components/account-menu/account-menu.component';
import { AccountDetailPersonalComponent } from '../../components/account-detail-personal/account-detail-personal.component';
import { AccountDetailAvatarComponent } from '../../components/account-detail-avatar/account-detail-avatar.component';
import { AccountSecurityEmailComponent } from '../../components/account-security-email/account-security-email.component';
import { AccountSecurityMobileComponent } from '../../components/account-security-mobile/account-security-mobile.component';
import { AccountSecurityPasswordComponent } from '../../components/account-security-password/account-security-password.component';
import { AccountSecurityKeyComponent } from '../../components/account-security-key/account-security-key.component';
import { AccountPrivacySettingComponent } from '../../components/account-privacy-setting/account-privacy-setting.component';
import { AccountSubmenuComponent } from '../../components/account-submenu/account-submenu.component';
import {AccountUserInfoComponent} from '../../components/account-user-info/account-user-info.component';
import { ElModule } from 'element-angular';

@NgModule({
    imports: [
        CommonModule,
        AccountRoutingModule,
        ElModule.forRoot(),
    ],
    declarations: [
        AccountPageComponent,

        AccountMenuComponent,
        AccountDetailPersonalComponent,
        AccountDetailAvatarComponent,
        AccountSecurityEmailComponent,
        AccountSecurityMobileComponent,
        AccountSecurityPasswordComponent,
        AccountSecurityKeyComponent,
        AccountPrivacySettingComponent,
        AccountSubmenuComponent,
        AccountUserInfoComponent,
    ],
    exports: [AccountPageComponent],
    providers: []
})
export class AccountModule {}
