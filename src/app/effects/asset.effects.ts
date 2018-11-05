// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { Effect, Actions, ofType } from '@ngrx/effects';
// import { of } from 'rxjs/observable/of';
// import { tap, map, exhaustMap, catchError , merge, filter, withLatestFrom } from 'rxjs/operators';
// import { Observable } from 'rxjs/Observable';
// import { Store } from '@ngrx/store';
// import { AppState } from '../reducers';

// import { BlockService } from '../shared';
// import {
//   AssetA,
//   AssetSuccess,
//   AssetFailure,
// } from '../actions/asset';
// import { AssetActionTypes } from '../constants';

// import { Asset } from '../models';

// @Injectable()
// export class AssetEffects {
//   @Effect()
//   AssetA$ = this.actions$.pipe(
//     ofType(AssetActionTypes.AssetA),
//     exhaustMap(() =>
//       this.blockService
//         .getAsset()
//         .pipe(
//           map(asset => new AssetSuccess({ asset })),
//           catchError(error => {
//             console.log('err', error);
//             return of(new AssetFailure(error));
//           }),
//         )
//     ),
//   );

//   @Effect({ dispatch: false })
//   AssetSuccess$ = this.actions$.pipe(
//     ofType(AssetActionTypes.AssetSuccess),
//     tap(() => {
//       console.log('AssetSuccess', 'AssetSuccess');
//      })
//   );

//   @Effect({ dispatch: false })
//   AssetFailure$ = this.actions$.pipe(
//     ofType(AssetActionTypes.AssetFailure),
//     tap(() => {
//       console.log('AssetFailure', 'AssetFailure');
//     })
//   );

//   constructor(
//     private actions$: Actions,
//     private blockService: BlockService,
//     private store$: Store<AppState>,
//   ) {}
// }
