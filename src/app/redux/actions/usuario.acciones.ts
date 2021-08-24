import { createAction, props } from '@ngrx/store';
import { Idomicilio } from 'src/app/MercaLibre/IData/domicilio';

import { usuario } from 'src/app/MercaLibre/IData/usuarios';

export const DELUSUARIO = ' [usuario] del';
export const GETUSUARIO = '[usuario] obtener';
export const GETUSUARIOEXITO = '[usuario] obtener exito';
export const UPDATEUSUARIO = ' [usuario] update';
export const ADDUSUARIO = '[usuario] agregar';
export const GETDIRECCION = '[direcciones] get';
export const GETDIRECCIONEXITO = '[direcciones] get exito';
export const GETDIRECCIONFALLO = '[direcciones] get fallo';
export const GETELEFONO = '[telefono] get';
export const GETELEFONOEXITO = 'telefono get exito';

export const getusuarioAction = createAction(GETUSUARIO);
export const getusuarioActionExito = createAction(
  GETUSUARIOEXITO,
  (usuarios: usuario[]) => ({ usuarios })
);
export const delusuarioAction = createAction(
  DELUSUARIO,
  props<{ usuario: usuario }>()
);
export const updateusuarioAction = createAction(
  UPDATEUSUARIO,
  props<{ usuario: usuario }>()
);

export const addusuarioAction = createAction(
  ADDUSUARIO,
  props<{ usuario: usuario }>()
);

export const getDirecciones = createAction(
  GETDIRECCION,
  props<{ usuario: usuario }>()
);
export const getDireccionesexito = createAction(
  GETDIRECCIONEXITO,
  props<{ domicilio: Idomicilio }>()
);
export const getDireccionesFallo = createAction(GETDIRECCIONFALLO);
