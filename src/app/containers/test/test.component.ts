// import { Component, OnInit } from '@angular/core';
// import { LoggerService, WalletService } from '../../shared';
// import { Store, select } from '@ngrx/store';
// import { AppState } from '../../reducers';
// import { AuthActionTypes } from '../../constants';
// import { User, } from '../../models';
// import { Observable } from 'rxjs/Observable';


// @Component({
//   selector: 'app-home',
//   templateUrl: './test.component.html',
//   styleUrls: ['./test.component.scss']
// })
// export class TestComponent implements OnInit {
//   private user: Observable<User>;
//   private pwd: string;
//   constructor(private logger: LoggerService, private store: Store<AppState>, private walletService: WalletService) {

//   }

//   ngOnInit() {
//     this.logger.invokeConsoleMethod( 'info', 'AppComponent: logger.invokeConsoleMethod()');

//   }

//   login() {
//     // this.store.dispatch({ type: AuthActionTypes.Login, payload: {address: 'AHZDq78w1ERcDYVBWjU5owWcbFZKLvhg7X'} });
//     // this.user = this.store.pipe(select('authState'));
//     this.logger.invokeConsoleMethod('info', 'AppComponent' + this.pwd);
//     this.walletService.loginNep2('123456789');
//   }

//   display() {
//     // this.store.pipe(select('authState')).subscribe(data => {
//     //   this.logger.invokeConsoleMethod( 'info', data );
//     // });
//     this.user.subscribe(data => {
//       this.logger.invokeConsoleMethod( 'info', data );
//     });
//    // this.logger.invokeConsoleMethod( 'info', user.subscribe(data) );

//   }
//   download() {
//     this.walletService.generateNewWalletAccount('123456789', '123456789');
//     this.walletService.downloadWallet(new Date().getMilliseconds().toString());
//   }
//   readFile (event) {
//     const self = this;
//     self.logger.invokeConsoleMethod('info', event);
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onload = function (e: any) {
//       try {
//         self.logger.invokeConsoleMethod('info', JSON.parse(e.target.result));
//         self.walletService.loadWallet(e.target.result);
//       } catch (err) {

//       }
//     };
//     reader.readAsText(file);
//   }

// }
