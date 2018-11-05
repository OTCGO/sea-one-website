import { Action } from '@ngrx/store';
import { Asset } from '../models';
import { AssetActionTypes } from '../constants';


export class AssetA implements Action {
    readonly type = AssetActionTypes.AssetA;

    constructor() { }
}


export class AssetSuccess implements Action {
    readonly type = AssetActionTypes.AssetSuccess;

    constructor(public payload: { asset: Asset }) { }
}

export class AssetFailure implements Action {
    readonly type = AssetActionTypes.AssetFailure;

    constructor(public payload: any) { }
}


export type AssetActionsUnion =
  | AssetA
  | AssetSuccess
  | AssetFailure;

