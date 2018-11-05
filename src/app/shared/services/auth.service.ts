// import { Injectable } from '@angular/core';
// import { of ,  throwError as _throw ,  Observable } from 'rxjs';
// import { User } from '../../models';
// import { HttpClient } from '@angular/common/http';
// import { LoggerService } from './log4ts/logger.service';


// @Injectable()
// export class AuthService {
//   private loginURL = '/api/v1/uid';
//   constructor(private http: Http, private logger: LoggerService) {}

//   /**
//    *
//    *
//    * @param {User} { address }
//    * @returns {Observable<User>}
//    * @memberof AuthService
//    */
//   login({ address }: User): Observable<User> {
//     return  this.http.get<User>(`${this.loginURL}/${address}`);

//   }

//   logout() {
//     return of(true);
//   }
// }
