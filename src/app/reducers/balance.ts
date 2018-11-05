import { BalanceActionsUnion } from './../actions/balance';
import { BalanceActionTypes } from '../constants';


export function balanceReducer(state = [], action: BalanceActionsUnion) {
    switch (action.type) {
        case BalanceActionTypes.LoadSuccess: {
            console.log('action.payload', action.payload);
            return action.payload;

        }

        // case AuthActionTypes.Logout: {
        //   return initialState;
        // }

        default: {
            return state;
        }
    }
}

