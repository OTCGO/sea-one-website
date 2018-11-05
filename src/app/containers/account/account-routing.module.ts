import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AccountPageComponent } from './account.component';


export const routes: Routes = [
    {
        path: '',
        component: AccountPageComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class AccountRoutingModule {}
