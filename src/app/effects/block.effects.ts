import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of ,  Observable } from 'rxjs';
import { tap, map, exhaustMap, catchError , merge, filter, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { BlockService } from '../shared';
import {
  BlockHeight,
  BlockHeightSuccess,
  BlockHeightFailure,
} from '../actions/block';
import { BlockActionTypes, BonusActionTypes } from '../constants';

import { Block } from '../models';

@Injectable()
export class BlockEffects {
  @Effect()
  BlockHeight$ = this.actions$.pipe(
    ofType(BlockActionTypes.BlockHeight),
    // merge(Observable.interval(2000)),
    withLatestFrom(this.store$),
    exhaustMap(([ action, appState ]) =>
      this.blockService
        .getBlockHeight()
        .pipe(
          filter((x) => {
            console.log('x', x);
            console.log('appState', appState);
            return  x.height > appState.blockReducer.height;
          }),
          map(block => new BlockHeightSuccess(block)),
          catchError(error => {
            console.log('err', error);
            return of(new BlockHeightFailure(error));
          }),
        )
    ),
  );

  @Effect({ dispatch: false })
  BlockHeightSuccess$ = this.actions$.pipe(
    ofType(BlockActionTypes.BlockHeightSuccess),
    tap(() => {
      console.log('BlockEffects', 'BlockHeightSuccess');
     })
  );

  @Effect({ dispatch: false })
  BlockHeightFailure$ = this.actions$.pipe(
    ofType(BlockActionTypes.BlockHeightFailure),
    tap(() => {
      console.log('BlockEffects', 'BlockHeightFailure');
    })
  );

  @Effect()
  // LoodBonus$ = this.actions$.pipe(
  //   ofType(BonusActionTypes.LoodBonus),
  //   // merge(Observable.interval(2000)),
  //   withLatestFrom(this.store$),
  //   exhaustMap(([ action, appState ]) =>
  //     // this.blockService
  //     //   .getBlockHeight()
  //     //   .map(block => new BlockHeightSuccess(block)),
  //     //     catchError(error => {
  //     //       console.log('err', error);
  //     //       return of(new BlockHeightFailure(error));
  //     //     }),
  //     //   )
  //   ),
  // );

  @Effect({ dispatch: false })
  BonusSuccess$ = this.actions$.pipe(
    ofType(BonusActionTypes.BonusSuccess),
    tap(() => {
      console.log('BonusSuccess', 'BonusSuccess');
     })
  );

  @Effect({ dispatch: false })
  BonusFailure$ = this.actions$.pipe(
    ofType(BonusActionTypes.BonusFailure),
    tap(() => {
      console.log('BonusFailure', 'BonusFailure');
    })
  );

  constructor(
    private actions$: Actions,
    private blockService: BlockService,
    private store$: Store<any>,
  ) {}
}
