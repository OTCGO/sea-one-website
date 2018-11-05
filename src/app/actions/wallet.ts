import { Action } from '@ngrx/store';
import { Wallet } from '../models/';
import { WalletActionTypes } from '../constants';


export class Login implements Action {
  readonly type = WalletActionTypes.Login;


  constructor(public payload: Wallet) {}
}

export class LoginSuccess implements Action {
  readonly type = WalletActionTypes.LoginSuccess;

  constructor(public payload: Wallet) {}
}

export class LoginFailure implements Action {
  readonly type = WalletActionTypes.LoginFailure;

  constructor(public payload: any) {}
}

export class LoginRedirect implements Action {
  readonly type = WalletActionTypes.LoginRedirect;
}

export class Logout implements Action {
  readonly type = WalletActionTypes.Logout;
}

export type WalletActionsUnion =
  | Login
  | LoginSuccess
  | LoginFailure
  | LoginRedirect
  | Logout;
