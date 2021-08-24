import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { usuario } from 'src/app/MercaLibre/IData/usuarios';
import { UsuariosService } from 'src/app/MercaLibre/servicios/usuarios.service';
@Component({
  selector: 'mod-data-personal',
  templateUrl: './mod-data-personal.component.html',
  styleUrls: ['./mod-data-personal.component.css']
})
export class ModDataPersonalComponent implements OnInit {
  // 'generico esta mal pero no tengo ganas de cambiar para algo tan pequeño, el primero tira el dato el usuairo y el segundo el dato actual'
  @Input() usuario:usuario;
  @Input() accion:string;
  @Input() ref;
  valorData:string;
  Data:FormGroup;
  cambioObserv;
  constructor(

    private usuarioService:UsuariosService,
    private fb:FormBuilder
  ) {
  }
  ngOnInit(): void {
    if(this.accion=='password'){
      this.valorData= this.usuario.password;
    }
    else if(this.accion=='usuario'){
      this.valorData=this.usuario.usuario;
    }
    this.Data= this.fb.group({
      inputdata:new FormControl(this.valorData,[Validators.required,Validators.minLength(4)])
    });
   }
  guardar(){
    // this.usuarioService.
    if(this.accion=='password'){
      this.usuario.password=this.Data.controls['inputdata'].value;
    }
    else if(this.accion=='usuario'){
      this.usuario.usuario=this.Data.controls['inputdata'].value;
    }
    this.cambioObserv=this.usuarioService.updateUser(this.usuario).subscribe();
    if(this.ref){
      this.cambioObserv.unsubscribe();
      this.ref.close();

    }
  }
}
