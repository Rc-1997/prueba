import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const tarjeta=[
      {id:0, userid:1, Numero:123456789,Nombre:'person1',Codigo:1,Ven_Mes:1,Ven_year:11} ,
      {id:1, userid:2,Numero:147258396,Nombre:'person2',Codigo:2,Ven_Mes:2,Ven_year:22} ,
      {id:2, userid:1 ,Numero:321654987,Nombre:'person3',Codigo:3,Ven_Mes:3,Ven_year:33}
    ];
    const usuarios = [
      {id:1, name: 'pedro',apellido:'perez' ,usuario:'XxpedroxX', password: 'hola1',dni:12345678}  ,
      {id:2, name: 'juan',apellido:'pereza', usuario:'junjo' , password: 'hola2',dni:12345679} ,
      {id:3, name: 'marco',apellido:'perezo',usuario:'marcopolo', password: 'hola2',dni:12345670}
    ];
    const telefonos=[
      {id:1, userid:1, tel:'12345678'},
      {id:2, userid:1, tel:'87654321'},
      {id:3, userid:3, tel:'53746918'},
    ]
    const domicilio=[
      {id:1,userid:1,x:1,y:1},
      {id:2,userid:1,x:2,y:2},
      {id:3,userid:3,x:3,y:3},
    ]
    const prodDistribuidorA=[
      {prod:'heladera',precio:40},
      {prod:'labarropa',precio:23}
    ]
    const prodDistribuidorB=[
      {prod:'labarropa',precio:510},
      {prod:'carton',precio:53}
    ]

    return {tarjeta,usuarios,telefonos,domicilio, prodDistribuidorA,prodDistribuidorB};
  }

  genID(bd:any[]):number{
    return bd.length>0 ? Math.max(...bd.map(item=> item.id))+1:0;
  }

}
