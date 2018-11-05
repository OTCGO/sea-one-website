import { BlockActionsUnion  } from './../actions/block';
import { BlockActionTypes } from '../constants';
import { Block } from '../models';



const initialState = {
    height: 0
};
export function blockReducer(state = initialState, action: BlockActionsUnion) {
  switch (action.type) {
    case BlockActionTypes.BlockHeightSuccess: {
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

