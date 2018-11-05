import { Action } from '@ngrx/store';
import { Transfer } from '../models/';
import { TransferActionTypes } from '../constants';


export class CreateTransfer implements Action {
    readonly type = TransferActionTypes.CreateTransfer;

    constructor(public payload: Transfer) { }
}


export class TransferSuccess implements Action {
    readonly type = TransferActionTypes.TransferSuccess;

    constructor(public payload: { user: Transfer }) { }
}

export class TransferFailure implements Action {
    readonly type = TransferActionTypes.TransferFailure;

    constructor(public payload: any) { }
}


export type AccountActionsUnion =
  | CreateTransfer
  | TransferSuccess
  | TransferFailure;

