import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Tarjeta } from '../../../../../../IData/Tarjeta';
import { TarjetaService } from '../../../../../../servicios/tarjeta.service';
import { concatAll, filter, find, isEmpty, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'nueva-tarjeta',
  templateUrl: './nueva-tarjeta.component.html',
  styleUrls: ['./nueva-tarjeta.component.css'],
})
export class NuevaTarjetaComponent implements OnInit {
  form: FormGroup;
  Tarjetas: Tarjeta[] = [];
  id: Number;

  constructor(
    private fb: FormBuilder,
    private TarjetaServicio: TarjetaService,
    private location: Location,
    private router: Router
  ) {
    this.form = fb.group({
      Nombre: ['', Validators.required],
      Codigo: ['', Validators.required],
      Numero: ['', Validators.required],
      Mes: ['', Validators.required],
      Year: ['', Validators.required],
    });
    this.id = +localStorage.getItem('idUser');
  }
  ngOnInit(): void {}

  Add() {
    let tarjeta: Tarjeta = {
      Numero: +this.form.controls['Numero'].value,
      userid: this.id,
      Nombre: this.form.controls['Nombre'].value,
      Codigo: +this.form.controls['Codigo'].value,
      Ven_Mes: +this.form.controls['Mes'].value,
      Ven_year: +this.form.controls['Year'].value,
    } as Tarjeta;

    // this.TarjetaServicio.AddTarjeta(tarjeta)
    //   .pipe(
    //     tap((tarServi) => {
    //       let verificador = this.TarjetaServicio.getTarjetas().pipe(
    //         find((tar) => (tarjeta.Numero == tar.Numero ? true : false)),
    //         isEmpty()
    //       );
    //       console.log(verificador, 'hola observer');
    //     })
    //   )
    //   .subscribe();

    this.TarjetaServicio.getTarjetas()
      .pipe(
        find((tarj) =>
          tarjeta.Numero == tarj.Numero && tarjeta.userid == tarj.userid
            ? true
            : false
        ),
        // isEmpty(),
        map((tarjBool) =>
          tarjBool ? of([]) : this.TarjetaServicio.AddTarjeta(tarjeta)
        ),
        concatAll()
      )
      .subscribe({complete: ()=>this.router.navigate(['Protected/usuario/personalData']) } );
  }

  Back() {
    this.location.back();
  }
}
