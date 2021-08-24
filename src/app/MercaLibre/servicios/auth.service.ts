import { Injectable } from '@angular/core';
import { select, State } from '@ngrx/store';

import { Observable } from 'rxjs';
import { find, map, take, tap } from 'rxjs/operators';
import { storeApp } from 'src/app/redux/interfaz';
import {
  loginSelector,
  // loginSelector,
  usuarioSelector,
} from 'src/app/redux/selectores/usuario.select';
import { usuario } from '../IData/usuarios';
import { UsuariosService } from './usuarios.service';

@Injectable({ providedIn: 'platform' })
export class AuthService {
  idUser: number;

  //idUser ->simula token usuario
  constructor(
    private usuarioService: UsuariosService,
    private state: State<storeApp>
  ) {
    localStorage.removeItem('idUser');
  }
  Login(usuario: usuario): Observable<usuario> {
    // this.idUser = usuario.id;
    // console.log(usuario)
    // localStorage.setItem('idUser', String(this.idUser));
    // console.log(localStorage.getItem('idUser'), usuario)
    return this.usuarioService
      .getUser()
      .pipe(
        find(
          (user) =>
            user.name == usuario.name && user.password == usuario.password
        ),
        tap(usuario => localStorage.setItem('idUser', String(usuario.id)))
      );
    // console.log('se ha logeado');
  }
  isLogin(): Observable<boolean> {
    // this.state
    //   .pipe(select(loginSelector))
    //   .subscribe((s) => console.log(s == null));
    return this.state.pipe(
      select(loginSelector),
      // tap((user) => console.log('nose capo', user)),
      map((usuario) => (usuario != null ? true : false))
    );
  }
  getToken(): string {
    // console.log(this.idUser.toString());
    //por ahora solo se usa este id como token nada que ver

    return `${this.idUser}`;
  }
}
