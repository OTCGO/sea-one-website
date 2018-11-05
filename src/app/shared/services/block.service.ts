import { Injectable } from '@angular/core';
import * as  FileSaver from 'file-saver';
import { LoggerService } from './log4ts/logger.service';
import { Response, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Block, Bonus, Asset } from '../../models';
import { Observable } from 'rxjs';
// import * as moment from 'moment';
import { ApiService } from './api.service';


@Injectable()
export class BlockService {
    private blockHeightURL = `height`;
    private blockOntHeightURL = `height/ont`;

    private bonusURL = `claim`;
    private bonusOntURL = `claim/ont`;
    // private block: Block;

    private assetURL = `asset`;

    constructor(private logger: LoggerService, private http: HttpClient) {

    }


    /**
     *
     *
     * @returns {Observable<Block>}
     * @memberof BlockService
     */
    getBlockHeight(): Observable<Block> {
        return this.http.get<Block>(`${this.blockHeightURL}`);
    }

    /**
     *
     *
     * @returns {Observable<Block>}
     * @memberof BlockService
     */
    getBlockOntHeight(): Observable<Block> {
        return this.http.get<Block>(`${this.blockOntHeightURL}`);
    }


    /**
     *
     *
     * @param {String} address
     * @returns {Observable<Bonus>}
     * @memberof BlockService
     */
    getBonus(address: String): Promise<Bonus> {
        return this.http.get<Bonus>(`${this.bonusURL}/${address}`).toPromise();
    }


    /**
     *
     *
     * @param {String} address
     * @returns {Observable<Bonus>}
     * @memberof BlockService
     */
    getBonusOnt(address: String): Promise<Bonus> {
        return this.http.get<Bonus>(`${this.bonusOntURL}/${address}`).toPromise();
    }


    getAsset(): Promise<Asset> {
        return this.http.get<Asset>(`${this.assetURL}`).toPromise();
    }

    getNncAddress(domain) {
        return this.http.get(`resolve/${domain}`).toPromise();
    }

}
