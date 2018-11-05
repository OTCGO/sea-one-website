import { Action } from '@ngrx/store';
import { Block } from '../models/';
import { BlockActionTypes, BonusActionTypes } from '../constants';


export class BlockHeight implements Action {
    readonly type = BlockActionTypes.BlockHeight;

    constructor() { }
}


export class BlockHeightSuccess implements Action {
    readonly type = BlockActionTypes.BlockHeightSuccess;

    constructor(public payload: Block ) { }
}

export class BlockHeightFailure implements Action {
    readonly type = BlockActionTypes.BlockHeightFailure;

    constructor(public payload: any) { }
}


export class LoodBonus implements Action {
    readonly type = BonusActionTypes.LoodBonus;

    constructor() { }
}


export class BonusSuccess implements Action {
    readonly type = BonusActionTypes.BonusSuccess;

    constructor(public payload: Block ) { }
}

export class BonusFailure implements Action {
    readonly type = BonusActionTypes.BonusFailure;

    constructor(public payload: any) { }
}

export type BlockActionsUnion =
  | BlockHeight
  | BlockHeightSuccess
  | BlockHeightFailure
  | LoodBonus
  | BonusSuccess
  | BonusFailure;

