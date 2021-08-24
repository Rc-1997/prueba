import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Route,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../servicios/auth.service';
import { MensajeService } from '../../servicios/mensaje.service';

//{
//   providedIn: 'root'
// }
@Injectable({
  providedIn: 'root',
})
export class ProtectedGuard implements CanActivate {
  constructor(
    private rutas: Router,
    private authService: AuthService,
    private mensajeService: MensajeService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean> | boolean | UrlTree {
    return this.authService
      .isLogin()
      .pipe
      // tap((islogin) => (islogin == true ?'' : this.back()))
      ();
    // .subscribe((islogin) => (islogin ? this.back() : ''));
  }
  back() {
    this.mensajeService.openModal('no hay usuario logeado, redireccionando');
    this.rutas.navigate(['Login/Login']);
  }
}
