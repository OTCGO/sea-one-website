// import { authReducer , AuthState} from './auth';
// import { blockReducer , BlockState} from './block';
// import { accountReducer , AccountState} from './account';
// import { AssetState , assetReducer} from './asset';
import { walletReducer } from './wallet';
import { blockReducer } from './block';
import { balanceReducer } from './balance';

export const reducer = {
    walletReducer,
    blockReducer,
    balanceReducer
    // authState: authReducer,
    // blockState: blockReducer,
    // accountState: accountReducer,
    // assetState: assetReducer,

};


// export interface AppState {
//     authState: AuthState;
//     blockState: BlockState;
//     // accountState: AccountState;
//     // assetState: AssetState;
// }
