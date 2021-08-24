import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { concatAll, filter, mergeAll } from 'rxjs/operators';
import { Idomicilio } from '../IData/domicilio';

@Injectable()
export class DomicilioService {
  private url = 'api/domicilio';

  constructor(private http: HttpClient) {}

  getDom(): Observable<Idomicilio> {
    return this.customize(this.http.get<Idomicilio>(this.url));
  }
  searchDom(id: number | string): Observable<Idomicilio> {
    return this.customize(this.http.get<Idomicilio>(this.url)).pipe(
      filter((domicilio) => domicilio.userid == id)
    );
  }
  deleteDomicilio(domicilio: Idomicilio): Observable<Idomicilio> {
    const del = `${this.url}/${domicilio.id}`;
    return this.http.delete<Idomicilio>(del);
  }
  updateDomicilio(domicilio: Idomicilio): Observable<Idomicilio> {
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    // };

    return this.http.put<Idomicilio>(this.url, domicilio);
  }
  addDomicilio(domicilio: Idomicilio): Observable<Idomicilio> {
    return this.http.post<Idomicilio>(this.url, domicilio);
  }
  getDomicilios(): Observable<Idomicilio[]> {
    return this.http.get<Idomicilio[]>(this.url);
  }

  customize(Observable: Observable<any>): Observable<any> {
    return Observable.pipe(concatAll());
  }
}
