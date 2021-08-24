import { createSelector } from '@ngrx/store';
import { usuario } from 'src/app/MercaLibre/IData/usuarios';
import { storeApp } from '../interfaz';

export const usuarioSelector = createSelector(
  (login: storeApp) => login.loginmodule.usuarios,
  (usuarios: usuario[]) => usuarios
);

export const loginSelector = createSelector(
  (login: any) => login.loginmodule.logincurrent.usuario,
  (usuario: usuario) => usuario
);
