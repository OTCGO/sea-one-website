import { Injectable } from '@angular/core';
import Neon, { wallet } from '@cityofzion/neon-js';
import * as  FileSaver from 'file-saver';
import { LoggerService } from './log4ts/logger.service';
import { Response, RequestOptions } from '@angular/http';
import { Transfer, Balance } from '../../models';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';
// import { Nep2 } from '../utils';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WalletService {
    private balanceURL = 'address';
    private balanceOntURL = 'address/ont';


    private buildTransferURL = 'transfer';
    private buildTransferOntURL = 'transfer/ont';

    private broadTransferURl = 'broadcast';
    private broadTransferOntURl = 'broadcast/ont';


    private getGasURL = 'gas';
    private getOngURL = 'ong';

    private historyURL = 'history';


    private wallet: any;
    // private nep2: Nep2;
    constructor(private logger: LoggerService, private http: HttpClient) {
        // this.nep2 = new Nep2();
    }

    /**
     *
     *
     * @param {string} passphrase
     * @param {string} passphrase2
     * @param {string} [wif]
     * @returns
     * @memberof WalletService
     */
    // generateNewWalletAccount(passphrase: string, passphrase2: string, wif?: string) {
    //     if (passphrase !== passphrase2) {

    //     }
    //     const account = new wallet.Account(wif || wallet.generatePrivateKey());
    //     const { WIF, privateKey, address, scriptHash } = account;

    //     const publicKey = wallet.getPublicKeyFromPrivateKey(privateKey, false);
    //     // const { privateKey,  publicKey } =  this.nep2.genKeyPairHex();
    //     // console.log('publicKey', publicKey);
    //     // const te = wallet.getPublicKeyFromPrivateKey(privateKey, false);
    //     // console.log('te', te);
    //     // this.logger.invokeConsoleMethod( 'info', `generateNewWalletAccount:publicKey:${publicKey},${address}`);

    //     // this.logger.invokeConsoleMethod( 'info', `generateNewWalletAccount:WIF:${WIF}`);

    //     const privateKeyEncrypted = this.nep2.encryptPrivateKey(privateKey, passphrase);
    //     const publicKeyCompressed = this.nep2.getCompressedPubHex(publicKey);
    //     this.wallet = {
    //         wif: WIF,
    //         privateKey,
    //         address,
    //         publicKey,
    //         scriptHash,
    //         privateKeyEncrypted,
    //         publicKeyCompressed
    //     };
    //     // console.log('WalletService', this.wallet);
    //     this.logger.invokeConsoleMethod('info', `generateNewWalletAccount:${JSON.stringify(this.wallet)}`);
    // }

    /**
     *
     *
     * @memberof WalletService
     */
    downloadWallet(name: string) {
        this.logger.invokeConsoleMethod('info', `downloadWallet:${name}`);
        if (this.wallet) {
            const blob = new Blob([JSON.stringify({
                address: this.wallet.address,
                publicKey: this.wallet.publicKey,
                privateKeyEncrypted: this.wallet.privateKeyEncrypted,
                publicKeyCompressed: this.wallet.publicKeyCompressed
            })], { type: 'text/plain;charset=utf-8' });
            FileSaver.saveAs(blob, `${name}.json`);
        }
    }

    /**
     *
     *
     * @param {any} result
     * @memberof WalletService
     */
    loadWallet(result) {
        this.wallet = JSON.parse(result);
        this.logger.invokeConsoleMethod('info', `loadWallet:${JSON.stringify(this.wallet)}`);
    }

    /**
     *
     *
     * @param {any} passphrase
     * @param {any} encryptedWIF
     * @memberof WalletService
     */
    // loginNep2(passphrase) {
    //     this.logger.invokeConsoleMethod('info', `loginNep2:${JSON.stringify(this.wallet)}`);
    //     const test = this.wallet.privateKeyEncrypted;
    //     this.logger.invokeConsoleMethod('info', `loginNep2:privateKeyEncrypted:${test}`);
    //     const wif = this.nep2.decrypt(test, passphrase);
    //     this.logger.invokeConsoleMethod('info', `loginNep2:wif:${wif}`);
    //     const result = this.nep2.doValidatePwd(wif, this.wallet.publicKey);
    //     this.logger.invokeConsoleMethod('info', `loginNep2:result:${result}`);
    // }


    /**
     *
     *
     * @param {any} dest 接收地址
     * @param {any} source 转出地址
     * @param {any} amount 转出数量
     * @param {any} assetId  转出资产ID
     * @memberof WalletService
     */
    buildTransfer(body): Promise<any> {
        return this.http.post<any>(`${this.buildTransferURL}`, body)
            .toPromise();
    }

    /**
    *
    *
    * @param {any} dest 接收地址
    * @param {any} source 转出地址
    * @param {any} amount 转出数量
    * @param {any} assetId  转出资产ID
    * @memberof WalletService
    */
    buildTransferOnt(body): Promise<any> {
        return this.http.post<any>(`${this.buildTransferOntURL}`, body).toPromise();

    }

    /**
     *
     *
     * @param {Transfer} {id, nonce, transaction }
     * @returns {Observable<Transfer>}
     * @memberof WalletService
     */
    broadTransfer(body): Promise<any> {
        // sign transaction
        return this.http.post<any>(`${this.broadTransferURl}`, body).toPromise();
    }

    /**
     *
     *
     * @param {Transfer} {id, nonce, transaction }
     * @returns {Observable<Transfer>}
     * @memberof WalletService
     */
    broadTransferOnt(body): Promise<any> {
        return this.http.post<any>(`${this.broadTransferOntURl}`, body).toPromise();
    }



    /**
     *
     *
     * @param {Account} { address }
     * @returns {Observable<Account>}
     * @memberof WalletService
     */
    balance({ address }): Promise<any> {
        // return this.http.get<Balance[]>(`${this.balanceURL}/${address}`);
        return this.http.get<any>(`${this.balanceURL}/${address}`).toPromise();

    }

    /**
     *
     *
     * @param {Account} { address }
     * @returns {Observable<Account[]>}
     * @memberof WalletService
     */
    // history({ address }: Account): Observable<Account[]>  {
    //     return this.http.get(`${this.historyURL}/${address}`, )
    //     .map((res: Response) => {
    //       const result = res.json();
    //       this.logger.invokeConsoleMethod( 'info', `balance:${JSON.stringify(result)}`);
    //       return result;
    //      });
    // }



    /**
     *
     *
     * @param {any} {publicKey  , signature, transaction}
     * @returns {Observable<Account>}
     * @memberof WalletService
     */
    bonusGas({ publicKey }) {
        return this.http.post<Account>(`${this.getGasURL}`, { publicKey }).toPromise();

    }

    /**
     *
     *
     * @param {any} {publicKey  , signature, transaction}
     * @returns {Observable<Account>}
     * @memberof WalletService
     */
    bonusOng({ publicKey }) {
        return this.http.post<Account>(`${this.getOngURL}`, { publicKey }).toPromise();

    }
}



