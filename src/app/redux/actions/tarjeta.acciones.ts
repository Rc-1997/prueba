import { createAction, props } from '@ngrx/store';
import { Tarjeta } from 'src/app/MercaLibre/IData/Tarjeta';

export const DELTARJETA = ' [tarjeta] del';
export const GETARJETA = '[tarjeta] obtener';
export const UPDATETARJETA = ' [tarjeta] update';
export const ADDTARJETA = '[tarjeta] agregar';

export const gettarjetaAction = createAction(GETARJETA);
export const delTarjetaAction = createAction(
  DELTARJETA,
  props<{ tarjeta: Tarjeta }>()
);
export const updateTarjetaAction = createAction(
  UPDATETARJETA,
  props<{ tarjeta: Tarjeta }>()
);

export const addtarjetaAction = createAction(
  ADDTARJETA,
  props<{ tarjeta: Tarjeta }>()
);

