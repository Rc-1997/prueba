import { Idomicilio } from '../MercaLibre/IData/domicilio';
import { Tarjeta } from '../MercaLibre/IData/Tarjeta';
import { Itelefono } from '../MercaLibre/IData/telefonos';
import { usuario } from '../MercaLibre/IData/usuarios';

export interface storeApp {
  loginmodule: usuarioStore;
}

export interface usuarioStore {
  usuarios: usuario[];
  logincurrent: datauser;
  // telefono: Itelefono[];
  // domicilio: Idomicilio[];
  // tarjeta: Tarjeta[];
}

export interface datauser {
  usuario: usuario;
  telefonos: Itelefono[];
  domicilios: Idomicilio[];
  tarjetas: Tarjeta[];
}

export interface domicilioStore {
  domicilio: Idomicilio[];
}

export interface tarjetaStore {
  tarjetas: Tarjeta[];
}

export interface telefonoStore {
  telefonos: Itelefono[];
}
