import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { getWalletState } from '../selectors';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of ,  Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {


    constructor(private store$: Store<any>,  private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {

        // console.log('canActivate', this.isLogin);

        this.store$.select(getWalletState).subscribe(val => {
            // this.isLogin = val.isLogin;

        console.log('canActivate', val.isLogin);
        if (!val.isLogin) {
            this.router.navigate(['']);
            return false;
        }
         return true;
        });

        return true;

    }
}
