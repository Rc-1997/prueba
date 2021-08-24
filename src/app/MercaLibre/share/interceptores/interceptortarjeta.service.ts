import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, using } from 'rxjs';
import { catchError, finalize, mergeAll, tap } from 'rxjs/operators';
import { customError } from '../../IData/customizeError';
import { MensajeService } from '../../servicios/mensaje.service';

@Injectable()
export class InterceptortarjetaService implements HttpInterceptor {
  customiError: customError;
  constructor(private memsajeService: MensajeService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const reqclone = req.clone();
    return next.handle(reqclone).pipe(
      catchError(this.handleError<any>())
    );
  }
  private handleError<T>( result?: T) {
    return (error: Error): Observable<T> => {
      this.memsajeService.OpenError(customError.getInstance().getError(error));
      console.log(error);
      console.error(error);

      return of(result as T);
    };
  }
}
