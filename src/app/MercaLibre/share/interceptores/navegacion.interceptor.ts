import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MensajeService } from '../../servicios/mensaje.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class NavegacionInterceptor implements HttpInterceptor {
  constructor(private mensajeService: MensajeService) {}
  // private tiempototal=new Date();
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    // this.mensajeService.loadData();

    // let tiempoinicio=new Date();
    // let band=0;
    // console.log(band);
    return next.handle(request).pipe(
      finalize(() => {

        // this.mensajeService.closeLoadData();

        //let finish=new Date();
        // console.log(finish.getTime()-tiempoinicio.getTime(),'mseg ');
        // this.tiempototal.setDate(finish.getTime()-tiempoinicio.getTime());
        // band=1;
        // console.log(band);
      })
    );
  }
}
