import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { select, State } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { find, tap } from 'rxjs/operators';
import { usuario } from '../MercaLibre/IData/usuarios';
import { UsuariosService } from '../MercaLibre/servicios/usuarios.service';
import { storeApp } from '../redux/interfaz';
import {
  // loginSelector,
  usuarioSelector,
} from '../redux/selectores/usuario.select';

@Injectable({
  providedIn: 'root',
})
export class ResolverResolver implements Resolve<usuario[]> {
  usuarios: usuario[] = [];

  constructor(
    private usuarioService: UsuariosService,
    private state: State<storeApp>
  ) {
    // console.log(UsuariosService);
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    // ): Observable<usuario> {
    //   return this.state.pipe(
    //     select(loginSelector),
    //     tap((usuario) => console.log(usuario))
    // );true
  ): Observable<usuario[]> {
    // return this.usuarioService
    return this.usuarioService.prueba();
    // .pipe(
    // find((user) =>
    //   user.id == Number(localStorage.getItem('userID')) ? true : false
    // ),
    // tap((user) => console.log(user))
    // );
    // .subscribe((user) => this.usuarios.push(user));
    // return of(true);
  }

  // let usuario: number = +route.params['prueba'];
  // return localStorage.getItem('idUser') ? of(true) : of(false);
}
