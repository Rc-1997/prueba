import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { State, Store } from '@ngrx/store';
import { Observable, pipe } from 'rxjs';
import { filter, finalize } from 'rxjs/operators';
import { Idomicilio } from 'src/app/MercaLibre/IData/domicilio';
import { Tarjeta } from 'src/app/MercaLibre/IData/Tarjeta';
import { Itelefono } from 'src/app/MercaLibre/IData/telefonos';
import { usuario } from 'src/app/MercaLibre/IData/usuarios';
import { DomicilioService } from 'src/app/MercaLibre/servicios/domicilio.service';
import { PruebaService } from 'src/app/MercaLibre/servicios/prueba.service';
import { TarjetaService } from 'src/app/MercaLibre/servicios/tarjeta.service';
import { TelefonoService } from 'src/app/MercaLibre/servicios/telefono.service';
import { UsuariosService } from 'src/app/MercaLibre/servicios/usuarios.service';
import { accionprueba } from 'src/app/redux/actions/log.accion';

import { ModDataPersonalComponent } from '../mod-data-personal/mod-data-personal.component';
import { modTarjetaComponent } from './AreaTarjeta/mod-tarjeta/modTarjeta.component';
import { ModTelefonoComponent } from './AreaTelefono/mod-telefono/ModTelefono.component';

@Component({
  selector: 'app-DataPersonalComponent',
  templateUrl: './DataPersonal.component.html',
  styleUrls: ['./DataPersonal.component.css'],
})
export class DataPersonalComponent implements OnInit {
  id: number;

  usuario!: usuario;
  tarjetas: Tarjeta[] = [];
  domicilio: Idomicilio[] = [];
  telefono: Itelefono[] = [];
  current;
  observer: Observable<Tarjeta>;
  typeCurrent: String;
  constructor(
    private state: Store<any>,
    private location: Location,
    private route: ActivatedRoute,
    private domicilioService: DomicilioService,
    private tarjetaService: TarjetaService,
    private telefonoService: TelefonoService,
    private modalService: NgbModal,
    private usuariosServicios: UsuariosService
  ) {

  }
  ngOnInit(): void {

    this.id = parseInt(localStorage.getItem('idUser'));
    console.log(this.id)

    this.usuariosServicios
      .findUser(this.id)
      .subscribe((user) => {
        this.usuario = user;
      });
    this.domicilioService.searchDom(this.id).subscribe((domicilio) => {
      this.domicilio.push(domicilio);
    });
    this.telefonoService.searchTel(this.id).subscribe((tel) => {
      this.telefono.push(tel);
    });
    this.tarjetaService
      .getTarjetas()
      .pipe(filter((tarj) => (tarj.userid == this.id ? true : false)))
      .subscribe((tarjeta) => this.tarjetas.push(tarjeta));
  }
  cifrar(int: number): string {
    let i = int.toString();
    i = i.substr(i.length - 4, i.length);
    return i;
  }

  openModUser(usuario: usuario, type: string) {
    const modalRef = this.modalService.open(ModDataPersonalComponent);
    modalRef.componentInstance.usuario = usuario;
    modalRef.componentInstance.accion = type;
    modalRef.componentInstance.ref = modalRef;
  }
  close() { }
}
