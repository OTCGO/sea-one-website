import {
    createFeatureSelector,
    createSelector
} from '@ngrx/store';



const getState = createFeatureSelector('blockReducer');

export const getBlockState = createSelector(getState, (state) => {
    console.log('state', state);
    return state;
});
