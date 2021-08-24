import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Idomicilio } from '../../../../../../IData/domicilio';
import { DomicilioService } from '../../../../../../servicios/domicilio.service';
import { CrearDireccionComponent } from '../crear-direccion/crear-direccion.component';

@Component({
  selector: 'seleccionar-direccion',
  templateUrl: './seleccionar-direccion.component.html',
  styleUrls: ['./seleccionar-direccion.component.css'],
})
export class SeleccionarDireccionComponent implements OnInit {
  domicilios: Idomicilio[] = [];
  @Input() ref;
  @Output() idEmit = new EventEmitter<number>();
  constructor(
    private domicilioService: DomicilioService,
    private modalService: NgbModal,
    private Router:Router
  ) {}

  close() {
    this.ref ? this.ref.close() : console.log('esto no es un modal capo');
  }
  ngOnInit(): void {
    this.domicilioService
      .searchDom(localStorage.getItem('idUser'))
      .subscribe((dom) => {
        this.domicilios.push(dom);
      });
  }
  emitSeleccion(idDomicilio ) {
    this.idEmit.emit(idDomicilio);
    this.close();
  }
  agregarDireccion() {
    // const modalRef = this.modalService.open(CrearDireccionComponent);
    // modalRef.componentInstance.idUser = localStorage.getItem('idUser');
    console.log('redirect');
    this.Router.navigate(['Protected/usuario/direccion/crear']);
    this.close();
  }
}
