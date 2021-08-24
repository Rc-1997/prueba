import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Itelefono } from '../IData/telefonos';
import { switchAll } from 'rxjs/operators';


@Injectable()
export class TelefonoService {
  private url = 'api/telefonos';
  constructor(private http: HttpClient) {}
  getTelefonos():Observable<Itelefono>{
    return this.customize(this.http.get(this.url));
  }
  searchTel(id:number):Observable<Itelefono>{
    return this.customize(this.http.get<Itelefono>(`${this.url}/?userid=${id}`));
  }
  addTelefono(telefono:Itelefono):Observable<Itelefono>{
    return this.customize(this.http.post<Itelefono>(this.url,telefono));
  }
  updateTelefono(telefono:Itelefono):Observable<Itelefono>{
    return this.customize(this.http.put<Itelefono>(this.url,telefono));
  }
  deleteTelefono(idTelefono:Number):Observable<Itelefono>{
    return this.customize( this.http.delete<Itelefono>(`${this.url}/${idTelefono}`));
  }
  private customize(HttpRequest: Observable<any>): Observable<any> {
    return HttpRequest.pipe(switchAll());
  }
}
