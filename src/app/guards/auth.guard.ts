import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return route.queryParams?.valid === 'true';
    // we should call to refreshtoken api
    return this.authService.login('kevinryan', 'kev02937@').pipe(
      catchError((err, caught) => {
        this.router.navigate(['/login'])
        return '';
      }),
      map((t) => {
        if (typeof t === 'string') {
          return false;
        } else if(t.token) {
          return true;
        }
        return false;
      }),
    );
  }

}
