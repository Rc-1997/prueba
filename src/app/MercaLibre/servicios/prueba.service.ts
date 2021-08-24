import { Injectable } from '@angular/core';

@Injectable({
  providedIn: null
})
export class PruebaService {
  num:number;
  constructor() {
    console.log('nuevo servicio prueba');
  }
  set(numero:number){
    this.num=numero;
  }
  get(){
    return this.num;
  }
}
