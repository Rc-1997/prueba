import { errorMsj } from "./errorMsj";

export class customError {
  private static instance: customError;
  private constructor() {}
  public static getInstance() {
    if (!customError.instance) {
      customError.instance = new customError();
    }
    return customError.instance;
  }
  getError(error: any): errorMsj {
    let operacion:string='';
    let errorType: string = '';
    let ErrorMsj:errorMsj={} as errorMsj;
    if (error.status==404) {
      operacion = 'peticion al servidor';
      errorType='servidor no responde';
    }
    else {
      operacion = 'error no reconocido'
      errorType='unknown'
    }

    ErrorMsj.operacion=operacion;
    ErrorMsj.mensajes=errorType;
    return ErrorMsj;
  }
}
