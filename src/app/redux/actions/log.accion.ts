import { createAction, props } from '@ngrx/store';
import { usuario } from 'src/app/MercaLibre/IData/usuarios';
import { createClassDeclaration } from 'typescript';
import { datauser } from '../interfaz';

export const LOGIN = '[usuario] login';
export const LOGINEXITO = '[usuario] login exito';
export const LOGBAD = '[usuario] log fallido';
export const LOGOUT = '[usuario] logout';
export const LOGOUTEXITO = '[usuario] logout exito';
export const LOGOUTBAD = '[usuario] logout fallido ';
export const pruebas = 's';
export const accionprueba = createAction(pruebas, props<{ usuario }>());
export const pruebass = 'ss';
export const accionpruebas = createAction(pruebas);
export const log = createAction(LOGIN, (usuario: usuario) => ({ usuario }));

export const logexito = createAction(LOGINEXITO, (usuario: usuario) => ({
  usuario,
}));

export const logoutexito = createAction(LOGOUTEXITO);

export const logout = createAction(LOGOUT);
export const logfallido = createAction(LOGBAD);
export const logoutFallido = createAction(LOGOUTBAD);
