import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { UsuariosService } from 'src/app/MercaLibre/servicios/usuarios.service';
import { log, logexito, logfallido } from '../actions/log.accion';
Injectable();
export class logEfectos {
  // login$ = createEffect(() =>
  //   this.acciones$.pipe(
  //     ofType(log),
  //     concatMap(({ usuario }) =>
  //       this.usuarioService
  //         .login(usuario)
  //       .pipe(
  //         map((usuarioExistente) =>
  //           usuarioExistente ? logexito(usuario) : logfallido()
  //         )
  //       )
  //   )
  // )
  // );

  constructor(
    private acciones$: Actions,
    private usuarioService: UsuariosService
  ) {}
}
