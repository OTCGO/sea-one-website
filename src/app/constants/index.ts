export enum WalletActionTypes {
    Login = '[Wallet] Login',
    Logout = '[Wallet] Logout',
    LoginSuccess = '[Wallet] Login Success',
    LoginFailure = '[Wallet] Login Failure',
    LoginRedirect = '[Wallet] Login Redirect',
}

export enum BalanceActionTypes {
    Load = '[Balance] Load',
    LoadSuccess = '[Balance] LoadSuccess',
    LoadFailure = '[Balance] LoadFailure',
    LoadRedirect = '[Balance] LoadRedirect',

    // Create = '[Account] Create',
    // CreateSuccess = '[Account] CreateSuccess',
    // CreateFailure = '[Account] CreateFailure',
    // CreateRedirect = '[Account] CreateRedirect',

    // Download = '[Account] Download',
    // DownloadSuccess = '[Account] DownloadSuccess',
    // DownloadFailure = '[Account] DownloadFailure',

    // Balance = '[Account] Balance',
    // BalanceSuccess = '[Account] BalanceSuccess',
    // BalanceFailure = '[Account] BalanceFailure'
}


export enum TransferActionTypes {
    CreateTransfer = '[Transfer] CreateTransfer',
    TransferSuccess = '[Transfer] TransferSuccess',
    TransferFailure = '[Transfer] TransferFailure'
}


export enum BlockActionTypes {
    BlockHeight = '[Block] BlockHeight',
    BlockHeightSuccess = '[Block] BlockHeightSuccess',
    BlockHeightFailure = '[Block] BlockHeightFailure'
}



export enum AssetActionTypes {
    AssetA = '[Asset] AssetA',
    AssetSuccess = '[Asset] AssetSuccess',
    AssetFailure = '[Asset] AssetFailure'
}


export enum BonusActionTypes {
    LoodBonus = '[Bonus] LoodBonus',
    BonusSuccess = '[Bonus] BonusSuccess',
    BonusFailure = '[Bonus] BonusFailure'
}


export const NEO_HASH = 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b';
export const ONT_HASH = '0000000000000000000000000000000000000001';
export const ONG_HASH = '0000000000000000000000000000000000000002';
