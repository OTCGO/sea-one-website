import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AssetDetailPageComponent } from '../../containers/asset/detail/detail.component';
import { AssetListPageComponent } from '../../containers/asset/list/list.component';


export const routes: Routes = [
    {
        path: '',
        component: AssetListPageComponent
    },
    {
        path: 'detail',
        component: AssetDetailPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class AssetRoutingModule {}


