import {
    createFeatureSelector,
    createSelector
} from '@ngrx/store';

import { Wallet } from '../models';

export const getWalletState = createSelector(createFeatureSelector('walletReducer'), (state: Wallet  ) => {
    console.log('state', state);
    return state;
});
