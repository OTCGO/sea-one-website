import {  WalletActionsUnion  } from './../actions/wallet';
import { WalletActionTypes } from '../constants';
import { Wallet } from '../models';

// export interface AccountState {
//   balance: Account[];
// }

// export const initialAccountState: AccountState = {
//   balance: []
// };

const initialState = {
    isLogin: false,
    privateKey: '',
    encrypted: '',
    address: '',
    publicKey: '',
    scriptHash: '',
    wif: '',
    publicKeyCompressed:  '',
    privateKeyEncrypted:  '',
};



export function walletReducer(state = initialState, action: WalletActionsUnion) {
  switch (action.type) {
    case WalletActionTypes.LoginSuccess: {
      return {
        ...state,
        ...action.payload
      };

    }

    // case AuthActionTypes.Logout: {
    //   return initialState;
    // }

    default: {
      return state;
    }
  }
}

