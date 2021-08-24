import { Location } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { find } from 'rxjs/operators';
import { Idomicilio } from 'src/app/MercaLibre/IData/domicilio';
import { DomicilioService } from 'src/app/MercaLibre/servicios/domicilio.service';
import { MensajeService } from 'src/app/MercaLibre/servicios/mensaje.service';

@Component({
  selector: 'app-deletedireccion',
  templateUrl: './deletedireccion.component.html',
  styleUrls: ['./deletedireccion.component.css'],
})
export class DeletedireccionComponent implements OnInit {
  @Input() iddireccion!: number;
  @Input() ref!: NgbModalRef;
  direccion:Idomicilio;
  idUser: number = +localStorage.getItem('idUser');
  constructor(
    private router: Router,
    private location: Location,
    private domicilioService: DomicilioService,
    private mensajeService: MensajeService
  ) {}

  ngOnInit(): void {
    this.domicilioService
      .getDom()
      .pipe(
        find((direccion) =>
          direccion.id == this.iddireccion && direccion.userid == this.idUser
            ? true
            : false
        )
      ).subscribe(
        direccion=> this.direccion=direccion
      );
  }
  eliminar() {
    this.domicilioService.deleteDomicilio(this.direccion).subscribe({
      complete: () => {
        this.mensajeService.openModal('se a eliminado correctamente');
        this.close(true);
      },
    });
    this.domicilioService.getDom().subscribe((dom) => console.log(dom));
  }

  back(){
    this.location.back();
  }

  close(boolean:boolean) {
    this.ref
      ? this.ref.close(boolean)
      : this.back();
  }
}
