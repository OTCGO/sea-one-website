import { Injectable} from '@angular/core';
import { Observable} from 'rxjs';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { environment } from '../../../environments/environment';
// import * as moment from 'moment';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone({ url: `${environment.host}/${environment.net}/${req.url}?t=${(new Date()).valueOf()}` });
    return next.handle(apiReq);
  }
}
