import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Idomicilio } from 'src/app/MercaLibre/IData/domicilio';
import { DomicilioService } from 'src/app/MercaLibre/servicios/domicilio.service';

@Component({
  selector: 'app-crear-direccion',
  templateUrl: './crear-direccion.component.html',
  styleUrls: ['./crear-direccion.component.css'],
})
export class CrearDireccionComponent implements OnInit {
  idUser: number;
  newDireccion: FormGroup;
  constructor(
    private fb: FormBuilder,
    private direccionService: DomicilioService,
    private router: Router
  ) {
    this.newDireccion = fb.group({
      coordX: new FormControl('', [
        Validators.pattern('[0-9]+.[0-9]+'),
        Validators.required,
      ]),
      coordY: new FormControl('', [
        Validators.pattern('[0-9]+.[0-9]+'),
        Validators.required,
      ]),
    });
  }

  ngOnInit() {
    this.idUser = +localStorage.getItem('idUser');
  }
  crear() {
    if (this.idUser && this.newDireccion.valid) {
      let domicilio = {} as Idomicilio;
      domicilio.userid = this.idUser;
      domicilio.x = this.newDireccion.controls['coordX'].value;
      domicilio.y = this.newDireccion.controls['coordY'].value;
      this.direccionService.addDomicilio(domicilio).subscribe({
        complete: () => {
          this.router.navigate(['Protected/usuario/personalData']);
        },
      });
    }
  }
}
