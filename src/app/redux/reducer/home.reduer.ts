import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { usuario } from 'src/app/MercaLibre/IData/usuarios';
import { accionpruebas, pruebas } from '../actions/log.accion';

export const stateinicial: usuario[] = [];
export const homeColeccionReducer = createReducer(
  stateinicial,
  on(accionpruebas, (state) => {
    return state;
  })
);
