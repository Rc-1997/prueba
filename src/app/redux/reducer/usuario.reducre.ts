import { state } from '@angular/animations';
import { ContentObserver } from '@angular/cdk/observers';
import { on, createReducer } from '@ngrx/store';

import { usuario } from 'src/app/MercaLibre/IData/usuarios';
import {
  logexito,
  logfallido,
  logout,
  logoutexito,
  logoutFallido,
} from '../actions/log.accion';
import {
  addusuarioAction,
  getDireccionesexito,
  getusuarioAction,
  getusuarioActionExito,
  updateusuarioAction,
} from '../actions/usuario.acciones';
import { datauser, storeApp, usuarioStore } from '../interfaz';

export const usuarioStado: usuarioStore = {
  usuarios: [],
  logincurrent: {
    domicilios: [],
    usuario: null,
    tarjetas: [],
    telefonos: [],
  } as datauser,

  // tarjeta: [],
  // domicilio: [],
};

export const coleccionReducerUsuario = createReducer(
  usuarioStado,
  on(getusuarioActionExito, (state, { usuarios }) => {
    return { usuarios: [...usuarios], logincurrent: state.logincurrent };
  }),
  on(updateusuarioAction, (state, { usuario }) => {
    return {
      usuarios: [
        ...state.usuarios.filter((user) => user.id != usuario.id),
        usuario,
      ],
      logincurrent: state.logincurrent,
    };
  }),
  on(addusuarioAction, (state, { usuario }) => {
    return {
      usuarios: [...state.usuarios, usuario],
      logincurrent: state.logincurrent,
    };
  }),
  on(logexito, (state, { usuario }) => {
    console.log('efectivamente se ejecuta un par de veces');
    return {
      usuarios: [...state.usuarios],
      logincurrent: {
        domicilios: [],
        usuario: usuario,
        tarjetas: [],
        telefonos: [],
      } as datauser,
    };
  }),
  on(logfallido, (state) => {
    console.log(' no se a podido conectar log fallido');
    return state;
  }),
  on(logoutexito, (state) => {
    console.log('a salido correctamente');
    return {
      logincurrent: {
        domicilios: [],
        usuario: null,
        tarjetas: [],
        telefonos: [],
      } as datauser,
      usuarios: state.usuarios,
    };
  }),
  on(logoutFallido, (state) => {
    console.log('fallo el logout');
    return state;
  }),
  on(getDireccionesexito, (state, { domicilio }) => {
    return state;
  })
);
