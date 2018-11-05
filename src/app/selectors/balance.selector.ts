import {
    createFeatureSelector,
    createSelector
} from '@ngrx/store';



const getState = createFeatureSelector('balanceReducer');

export const getBalanceState = createSelector(getState, (state) => {
    // console.log('state',  JSON.stringify(state) );
    return state;
});
