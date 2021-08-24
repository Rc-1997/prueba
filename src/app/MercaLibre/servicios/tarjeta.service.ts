import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs';
import {
  catchError,
  concatAll,
  map,
  mergeAll,
  observeOn,
  tap,
} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tarjeta } from '../IData/Tarjeta';
import { Idomicilio } from '../IData/domicilio';
import { inject } from '@angular/core/testing';
@Injectable(
  // {providedIn:'platform'}
)
export class TarjetaService {
  private url = 'api/tarjeta';
  constructor(private http: HttpClient) {}

  searchTarjeta(param: string, id: number): Observable<Tarjeta> {
    return this.customize(
      this.http.get<Tarjeta>(`${this.url}/?${param}=${id}`)
    );
  }

  getTarjetas(): Observable<Tarjeta> {
    return this.customize(this.http.get<Tarjeta[]>(this.url));
  }

  AddTarjeta(tarjeta: Tarjeta): Observable<Tarjeta> {
    return this.http.post<Tarjeta>(this.url, tarjeta);
  }
  delete(Tarjeta: Tarjeta | number): Observable<Tarjeta> {
    const id = typeof Tarjeta === 'number' ? Tarjeta : Tarjeta.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Tarjeta>(url);
  }
  update(tarjeta: Tarjeta): Observable<Tarjeta> {

    return this.http.put<Tarjeta>(this.url,tarjeta);
  }
  findTarjet(numero: number): Observable<Tarjeta> {
    return this.customize(
      this.http.get<Tarjeta>(`${this.url}/?Numero=${numero}`).pipe()
    );
  }
  private customize(HttpRequest: Observable<any>): Observable<any> {
    return HttpRequest.pipe(concatAll());
  }
}
