import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../servicios/auth.service';

@Injectable({ providedIn: 'root' })
export class PublicGuard implements CanActivate {
  constructor(private rutas: Router, private authService: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // console.log('parte guard;
    return this.authService.isLogin().pipe(map((islogin) => !islogin));
    // if (this.authService.isLogin()) {
    //   console.error('hay alguien logeado');
    //   this.rutas.navigate(['home']);
    //   return false;
    // } else {
    //     return true;
    //   }
    // }
  }
}
