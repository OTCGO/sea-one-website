// import { AuthActionsUnion  } from './../actions/auth';
// import { AuthActionTypes } from '../constants';
// import { User } from '../models';

// export interface AuthState {
//   loggedIn: boolean;
//   user: User | null;
// }

// export const initialState: AuthState = {
//   loggedIn: false,
//   user: null,
// };

// export function authReducer(state = initialState, action: AuthActionsUnion): AuthState {
//   switch (action.type) {
//     case AuthActionTypes.LoginSuccess: {
//       return {
//         ...state,
//         loggedIn: true,
//         user: action.payload.user,
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

// export const getLoggedIn = (state: AuthState) => state.loggedIn;
// export const getUser = (state: AuthState) => state.user;
