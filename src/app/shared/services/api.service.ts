
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {map, catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';



import { JwtService } from './jwt.service';
import { LoggerService } from './log4ts/logger.service';

@Injectable()
export class ApiService {
  constructor(
    private http: Http,
    private jwtService: JwtService,
    private logger: LoggerService
  ) {}

  private setHeaders(): Headers {
    const headersConfig = {
      // 'Content-Type': 'application/json',
      // 'Accept': 'application/json'
    };

    // if (this.jwtService.getToken()) {
    //   headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
    // }
    return new Headers(headersConfig);
  }

  private formatErrors(error: any) {
     return observableThrowError(error.json());
  }

  get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { headers: this.setHeaders(), search: params }).pipe(
    catchError(this.formatErrors));
    // .map((res: Response) => res.json());
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    ).pipe(
    catchError(this.formatErrors),
    map((res: Response) => res.json()),);
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    ).pipe(
    catchError(this.formatErrors),
    map((res: Response) => res.json()),);
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`,
      { headers: this.setHeaders() }
    ).pipe(
    catchError(this.formatErrors),
    map((res: Response) => res.json()),);
  }
}
