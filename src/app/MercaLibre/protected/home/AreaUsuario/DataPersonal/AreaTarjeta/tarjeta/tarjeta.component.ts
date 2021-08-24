import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Tarjeta } from '../../../../../../IData/Tarjeta';
import { TarjetaService } from '../../../../../../servicios/tarjeta.service';
import { filter, repeatWhen } from 'rxjs/operators';
import { modTarjetaComponent } from '../mod-tarjeta/modTarjeta.component';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { DeleteTarjetaComponent } from '../delete-tarjeta/delete-tarjeta.component';
import { Observable, observable, of } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css'],
})
export class TarjetaComponent implements OnInit {
  Tarjetas: Tarjeta[] = [];
  id: number;
  constructor(
    private TarjetaServicio: TarjetaService,
    private modalService: NgbModal,
    private router: Router
  ) {
    this.id = +localStorage.getItem('idUser');
  }
  ngOnInit() {
    this.TarjetaServicio.getTarjetas()
      .pipe(filter((tarjeta) => (tarjeta.userid == this.id ? true : false)))
      .subscribe((tarjeta) => {
        this.Tarjetas.push(tarjeta);
      });
  }
  cambiar(numero: number): string {
    return String(numero);
  }
  openModTarjeta(tarjeta: Tarjeta) {
    const modalRef = this.modalService.open(modTarjetaComponent);
    modalRef.componentInstance.numero = tarjeta.Numero;
    modalRef.componentInstance.ref = modalRef;
  }
  agregar() {
    this.router.navigate(['Protected/usuario/tarjeta/crear']);
  }

  eliminar(id: number) {
    const modalDel = this.modalService.open(DeleteTarjetaComponent);
    modalDel.componentInstance.idTarjeta = id;
    modalDel.componentInstance.refModal = modalDel;
    modalDel.result.then((borrar) => {
      borrar
        ? (this.Tarjetas = this.Tarjetas.filter((tarjeta) => tarjeta.id != id))
        : console.log('no paso nada xd');
    });
  }
}
