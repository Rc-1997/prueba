import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter, first } from 'rxjs/operators';
import { Idomicilio } from 'src/app/MercaLibre/IData/domicilio';
import { DomicilioService } from 'src/app/MercaLibre/servicios/domicilio.service';
import { DeletedireccionComponent } from '../deletedireccion/deletedireccion.component';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css'],
})
export class DireccionComponent implements OnInit {
  direcciones: Idomicilio[] = [];
  id: number;
  indice: number;
  diractual;
  constructor(
    private domicilioService: DomicilioService,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.id = +localStorage.getItem('idUser');
  }

  ngOnInit(): void {
    this.domicilioService
      .getDom()
      .pipe(filter((dom) => (dom.userid == this.id ? true : false)))
      .subscribe((dom) => this.direcciones.push(dom));
  }
  redirect(ruta: string) {
    console.log('redireccionando');
    this.router.navigate(['Protected/usuario/direccion/del']);
  }
  eliminar() {
    const eliminarModal = this.modalService.open(DeletedireccionComponent);
    eliminarModal.componentInstance.iddireccion = this.indice;
    eliminarModal.componentInstance.ref = eliminarModal;
    eliminarModal.result.then((bool) => {
      bool
         ?this.direcciones= this.direcciones.filter((direccion) => direccion.id != this.indice)
        : console.log(bool);
      console.log(bool);
    });
  }
  change(index: number) {
    this.indice = index;
  }

  modificar() {
    this.router.navigate(['Protected/usuario/direccion/mod/', this.indice]);
  }

  agregar() {
    this.router.navigate(['Protected/usuario/direccion/crear']);
  }
}
