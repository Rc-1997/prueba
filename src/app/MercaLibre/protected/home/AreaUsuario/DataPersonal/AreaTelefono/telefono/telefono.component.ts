import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs/operators';
import { Itelefono } from 'src/app/MercaLibre/IData/telefonos';
import { TelefonoService } from 'src/app/MercaLibre/servicios/telefono.service';
import { ModTelefonoComponent } from '../mod-telefono/ModTelefono.component';

@Component({
  selector: 'app-telefono',
  templateUrl: './telefono.component.html',
  styleUrls: ['./telefono.component.css'],
})
export class TelefonoComponent implements OnInit {
  Telefonos: Itelefono[] = [];
  id: Number;
  constructor(
    private telefonoService: TelefonoService,
    private modalService: NgbModal
  ) {
    this.id = +localStorage.getItem('idUser');
  }

  ngOnInit() {
    this.telefonoService
      .getTelefonos()
      .pipe(filter((telefonos) => (telefonos.userid == this.id ? true : false)))
      .subscribe((telefonos) => this.Telefonos.push(telefonos));
  }
  openModTel(telefono: Itelefono) {
    const modalRef = this.modalService.open(ModTelefonoComponent);
    modalRef.componentInstance.Telefono = telefono;
    modalRef.componentInstance.ref = modalRef;
  }
}
