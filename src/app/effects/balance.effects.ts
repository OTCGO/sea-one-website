import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { tap, map, exhaustMap, catchError, mergeMap, } from 'rxjs/operators';
// import * as  _ from 'lodash';
import { find, concat } from 'lodash';

import { WalletService, BlockService } from '../shared';
import {
    Load,
    LoadSuccess,
    LoadFailure,
} from '../actions/balance';
import { BalanceActionTypes } from '../constants';

import { Balance } from '../models';

@Injectable()
export class BalanceEffects {
    @Effect()
    Load$ = this.actions$.pipe(
        ofType(BalanceActionTypes.Load),
        map((action) => action),
        exhaustMap(async (action: any) => {
            try {

                console.log('action', action);
                const { NEP5, GLOBAL, ONTOLOGY } = await this.blockService.getAsset();

                const address = action.payload;
                const { balances } = await this.walletService.balance({ address });

                console.log('BalanceEffects:asset', NEP5);
                console.log('BalanceEffects:balance', balances);
                console.log('BalanceEffects:balance', typeof balances);

                // const b: IBalanceEntities = {
                //     address:
                // };
                const result: Balance[] = [];

                for (const key in balances) {
                    if (balances.hasOwnProperty(key)) {
                        // const element = object[key];
                        // console.log('key', key);
                        const asset = find(concat(NEP5, GLOBAL, ONTOLOGY), function (o) {
                            // console.log('o', o);
                            return o.id === key;
                        });
                        // console.log('asset:asset', asset);
                        result.push({
                            hash: key,
                            name: Array.isArray(asset.name) ? asset.name[0].name : asset.name ,
                            symbol: asset.symbol ? asset.symbol : asset.name[0].name ,
                            amount: balances[key]
                        });
                    }
                }
                // console.log('result', result);
                // return of(new LoadSuccess(result));
                return result;
            } catch (error) {

                console.log('error', error);
                return error;
              //  return of(new LoadFailure(error));
            }
            // balances.map((item) => {
            //  console.log('item', item);
            //     // const coin = asset.find(c => c.id === hash);
            //     // const name = either(prop('symbol'), propOr('-', 'name'))(coin);
            //     // // console.log('mappingBalances', name)
            //     // const sym = Array.isArray(name) ? name[0].name : name;
            //     // const symbol = sym === '小蚁股' ? 'NEO'
            //     //     : sym === '小蚁币' ? 'GAS'
            //     //         : sym;
            //     // return {
            //     //     hash,
            //     //     symbol,
            //     //     amount: balances[hash]
            //     // };
            // });
            // _.map(balances, (item) => {
            //     console.log('item', item);
            // });

        }


            // forkJoin(addresses.map(this.getBalance.bind(this))).pipe(



            //     map(balances => new LoadSuccess(balances.reduce(balancesReducer(flatten(values(asset))), {}))),
            //     catchError(error => of(new LoadFailure(error)))
            // ),
            // ),
            // catchError(error => of(new LoadFailure(error)))
            // );

            // this.walletService
            //     .balance(address)
            //     .pipe(
            //         map(b => new LoadSuccess({ b })),
            //         catchError(error => of(new LoadFailure(error)))
            //     )
        ),
        map(b => new LoadSuccess(b)),
        catchError(error => {
            console.log('err', error);
            return of(new LoadFailure(error));
          }),
    );

    @Effect({ dispatch: false })
    LoadSuccess$ = this.actions$.pipe(
        ofType(BalanceActionTypes.LoadSuccess),
        tap(() => console.log('balanceSuccess', 'balanceSuccess'))
    );

    @Effect({ dispatch: false })
    LoadFailure$ = this.actions$.pipe(
        ofType(BalanceActionTypes.LoadFailure),
        tap(authed => {
            console.log('balanceFailure', 'balanceFailure');
        })
    );

    constructor(
        private actions$: Actions,
        private walletService: WalletService,
        private blockService: BlockService,
        private router: Router
    ) { }
}

