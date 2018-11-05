// import { AssetActionsUnion  } from './../actions/asset';
// import { AssetActionTypes } from '../constants';
// import { GLOBAL, NEP5, ONTOLOGY } from '../models';

// export interface AssetState {
//     state: string;
//     GLOBAL: GLOBAL[];
//     NEP5: NEP5[];
//     ONTOLOGY: ONTOLOGY[];
// }

// export const initialBlockState: AssetState = {
//     state: '0',
//     GLOBAL: [],
//     NEP5: [],
//     ONTOLOGY: []
// };

// export function assetReducer(state = initialBlockState, action: AssetActionsUnion): AssetState {
//   switch (action.type) {
//     case AssetActionTypes.AssetSuccess: {
//       return {
//         ...state,
//         ...action.payload.asset
//       };

//     }

//     // case AuthActionTypes.Logout: {
//     //   return initialState;
//     // }

//     default: {
//       return state;
//     }
//   }
// }

