import { Action } from '@ngrx/store';
import { Balance  } from '../models';
import { BalanceActionTypes } from '../constants';


export class Load implements Action {
    readonly type = BalanceActionTypes.Load;

    constructor(public payload: any) { }
}

export class LoadSuccess implements Action {
    readonly type = BalanceActionTypes.LoadSuccess;

    constructor(public payload: Balance[]) { }
}

export class LoadFailure implements Action {
    readonly type = BalanceActionTypes.LoadFailure;

    constructor(public payload: any) { }
}


export type BalanceActionsUnion =
  | Load
  | LoadSuccess
  | LoadFailure;
