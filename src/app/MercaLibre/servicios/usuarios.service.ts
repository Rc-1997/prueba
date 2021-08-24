import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  catchError,
  concatAll,
  filter,
  finalize,
  find,
  isEmpty,
  map,
  mergeAll,
  switchAll,
  switchMap,
  tap,
} from 'rxjs/operators';
import { usuario } from '../IData/usuarios';

@Injectable()
export class UsuariosService {
  private url = 'api/usuarios';
  // private url = 'api/usuarios';
  constructor(private http: HttpClient) {}

  getUser(): Observable<usuario> {
    return this.customize(this.http.get<usuario>(this.url));
  }

  findUser(id: Number | string): Observable<usuario> {
    return this.customize(this.http.get<usuario>(`${this.url}/?id=${id}`));
  }

  updateUser(usuario: usuario): Observable<usuario> {
    return this.customize(this.http.put<usuario>(this.url, usuario));
  }
  prueba(): Observable<usuario[]> {
    return this.http.get<usuario[]>(this.url);
  }
  private customize(HttpRequest: Observable<any>): Observable<any> {
    return HttpRequest.pipe(concatAll());
  }

  delete(id): Observable<usuario> {
    const url = `${this.url}/${id}`;

    return this.http.delete<usuario>(url);
  }
}
