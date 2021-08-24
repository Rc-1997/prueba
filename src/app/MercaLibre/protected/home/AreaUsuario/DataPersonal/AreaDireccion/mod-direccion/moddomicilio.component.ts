import { Location } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { find } from 'rxjs/operators';
import { Idomicilio } from 'src/app/MercaLibre/IData/domicilio';
import { DomicilioService } from 'src/app/MercaLibre/servicios/domicilio.service';
import { MensajeService } from 'src/app/MercaLibre/servicios/mensaje.service';

@Component({
  selector: 'mod-domicilio',
  templateUrl: './moddomicilio.component.html',
  styleUrls: ['./moddomicilio.component.css'],
})
export class ModDomicilioComponent implements OnInit {
  Domicilio: number;
  domicilio!: Idomicilio;
  modDireccion: FormGroup;
  constructor(
    private location:Location,
    private domicilioService: DomicilioService,
    private route: Router,
    private formbuild: FormBuilder,
    private Route: ActivatedRoute,
    private mensajeService: MensajeService
  ) {
    this.Domicilio = +this.Route.snapshot.paramMap.get('idDom');

    console.log(this.Domicilio);
    this.modDireccion = formbuild.group({
      X: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+.[0-9]+'),
      ]),
      Y: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+.[0-9]+'),
      ]),
    });
  }

  ngOnInit(): void {
    this.domicilioService
      .getDom()
      .pipe(
        find((domicilio) => (domicilio.id == this.Domicilio ? true : false))
      )
      .subscribe((domicilio) => {
        if (domicilio) {
          this.domicilio = domicilio;
          this.modDireccion.controls['Y'].setValue(this.domicilio.y);
          this.modDireccion.controls['X'].setValue(this.domicilio.x);
        } else {
          this.mensajeService.openModal(
            'no hay domicilio existente a modificar'
          );
        }
        console.log(domicilio);
      });
  }
  modificar() {
    if (this.modDireccion.valid) {
      console.log(this.domicilio);
      this.domicilio.x = this.modDireccion.controls['X'].value;
      this.domicilio.y = this.modDireccion.controls['Y'].value;
      this.domicilioService.updateDomicilio(this.domicilio).subscribe({
        complete: () => {
        this.route.navigate(['Protected/usuario/personalData'])
        },
      });
    }
  }

  close(){
    this.location.back();
  }

}

