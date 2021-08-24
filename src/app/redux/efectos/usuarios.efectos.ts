import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  exhaustMap,
  filter,
  map,
  switchMap,
  take,
  tap,
} from 'rxjs/operators';
import { AuthService } from 'src/app/MercaLibre/servicios/auth.service';
import { DomicilioService } from 'src/app/MercaLibre/servicios/domicilio.service';
import { UsuariosService } from 'src/app/MercaLibre/servicios/usuarios.service';
import {
  log,
  logexito,
  logfallido,
  logout,
  logoutexito,
  logoutFallido,
} from '../actions/log.accion';
import {
  GETDIRECCION,
  getDireccionesexito,
  getusuarioAction,
  getusuarioActionExito,
} from '../actions/usuario.acciones';
import { domicilioStore } from '../interfaz';
@Injectable({
  providedIn: 'root',
})
export class usuariosEfectos {
  usuariosCarga$ = createEffect(() =>
    this.acciones$.pipe(
      ofType(getusuarioAction),
      exhaustMap(() =>
        this.usuarioService
          .prueba()
          .pipe(map((usuarios) => getusuarioActionExito(usuarios)))
      )
      // takeLast(1)
    )
  );

  logIn$ = createEffect(() =>
    this.acciones$.pipe(
      ofType(log),

      switchMap(({ usuario }) => {
        localStorage.setItem('idUser', String(usuario.id))
        return this.authService.Login(usuario).pipe(
          take(1),
          map((usuarioLog) => {
            // return usuarioLog ? logexito(usuarioLog) : logfallido();
            console.log(usuarioLog)
            if (usuarioLog) {
              this.router.navigate(['Protected/usuario/personalData']);
              return logexito(usuarioLog);
            } else {
              return logfallido();
            }
          })
        )
      })
    )
  );

  logoutEfect = createEffect(() =>
    this.acciones$.pipe(
      ofType(logout),
      switchMap(() =>
        this.authService.isLogin().pipe(
          take(1),
          map((islogin) => {
            if (islogin) {
              this.router.navigate(['/Login/Login']);
              return logoutexito();
            } else {
              return logoutFallido();
            }
          })
        )
      )
    )
  );

  efectogetDireccion$ = createEffect(() =>
    this.acciones$.pipe(
      ofType(GETDIRECCION),
      exhaustMap(({ usuario }) =>
        this.domicilioService.getDom().pipe(
          filter((domicilio) => domicilio.userid == usuario),
          map((domicilio) => {
            return getDireccionesexito({ domicilio });
          })
        )
      )
    )
  );

  constructor(
    private acciones$: Actions,
    private usuarioService: UsuariosService,
    private authService: AuthService,
    private router: Router,
    private domicilioService: DomicilioService
  ) { }
}
