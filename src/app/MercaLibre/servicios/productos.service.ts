import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { concatAll } from 'rxjs/operators';
import { producto } from '../IData/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private endpointA='api/prodDistribuidorA';
  private endpointB='api/prodDistribuidorB';
  constructor(private htt:HttpClient) {

   }
   public getProdA():Observable<producto>{
     return this.customize(this.htt.get<any>(this.endpointA));
   }
   public getProdB():Observable<any>{
    return this.customize(this.htt.get<any>(this.endpointB));
  }
  private customize(HttpRequest: Observable<any>): Observable<any> {
    return HttpRequest.pipe(concatAll());
  }
}
