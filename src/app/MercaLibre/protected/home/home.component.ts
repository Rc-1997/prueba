import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { State, Store } from '@ngrx/store';
import { find } from 'rxjs/operators';
import { logout } from 'src/app/redux/actions/log.accion';
import { storeApp } from 'src/app/redux/interfaz';

import { Idomicilio } from '../../IData/domicilio';

import { usuario } from '../../IData/usuarios';
import { DomicilioService } from '../../servicios/domicilio.service';
import { TarjetaService } from '../../servicios/tarjeta.service';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  id: string;
  usuario: usuario;
  domicilio: Idomicilio[] = [];
  domicilioActual: Idomicilio;
  modalRef;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    public usuariosServicios: UsuariosService,
    public domicilioService: DomicilioService,
    public tarjetaService: TarjetaService,
    private state: Store<storeApp>
  ) {
    this.id = localStorage.getItem('idUser');

    // this.id=parseInt(this.route.snapshot.paramMap.get('id'));
  }
  volver() {
    this.state.dispatch(logout());
    // this.router.navigate(['/Login/Login']);
  }
  ngOnInit(): void {
    // let x:number[]=[];
    // console.log(x.push(1));
    // console.log(x.push(1),x);
    this.usuariosServicios
      .findUser(localStorage.getItem('idUser'))
      .subscribe((user) => {
        this.usuario = user;
      });
    this.domicilioService.searchDom(this.id).subscribe({
      next: (dmc) => {
        this.domicilio.push(dmc);
        console.log(dmc);
      },
      complete: () => {
        this.domicilio
          ? (this.domicilioActual = this.domicilio[0])
          : console.log('enviar a carga de datos o simplemente mostrar null');
      },
    });
  }
  redirect(ruta: string) {
    this.router.navigate([ruta]);
  }
  mostrarmodal(modal: any) {
    this.modalRef = this.modalService.open(modal);
  }

  changeSeleccion($event) {
    // console.log($event);
    this.domicilioService
      .getDom()
      .pipe(find((domicilio) => (domicilio.id == $event ? true : false)))
      .subscribe((domicilio) => {
        this.domicilioActual = domicilio;
        // console.log(domicilio);
      });
  }
}
