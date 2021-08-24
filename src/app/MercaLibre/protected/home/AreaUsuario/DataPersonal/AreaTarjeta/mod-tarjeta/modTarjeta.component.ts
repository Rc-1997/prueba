import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { find, tap } from 'rxjs/operators';
import { Tarjeta } from '../../../../../../IData/Tarjeta';
import { TarjetaService } from '../../../../../../servicios/tarjeta.service';

@Component({
  selector: 'mod-tarjeta',
  templateUrl: './ModTarjeta.component.html',
  styleUrls: ['./ModTarjeta.component.css'],
})
export class modTarjetaComponent implements OnInit {
  @Input() numero: number;
  modTarjeta: FormGroup;
  tarjeta!: Tarjeta;
  userid: number;
  @Input() ref;
  constructor(
    private fb: FormBuilder,
    private tarjetaServicio: TarjetaService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {
    this.modTarjeta = this.fb.group({
      numeroTarjeta: new FormControl('', Validators.required),
      nombreTarjeta: new FormControl('', Validators.required),
      mesVencimiento: new FormControl('', Validators.required),
      yearVencimiento: new FormControl('', Validators.required),
      codigoTarjeta: new FormControl('', Validators.required),
    });
    this.userid = +localStorage.getItem('idUser');
    !this.ref
      ? (this.numero = +activeRouter.snapshot.paramMap.get('numero'))
      : '';
    console.log(this.userid, this.numero);
  }

  ngOnInit(): void {
    this.tarjetaServicio
      .getTarjetas()
      .pipe(
        find((tarjeta) =>
          tarjeta.Numero == this.numero && tarjeta.userid == this.userid
            ? true
            : false
        )
      )
      .subscribe({
        next: (tarjeta) => {
          this.tarjeta = tarjeta;
          console.log(tarjeta);
        },
        complete: () => {
          this.modTarjeta.controls['codigoTarjeta'].setValue(
            this.tarjeta.Codigo
          );
          this.modTarjeta.controls['nombreTarjeta'].setValue(
            this.tarjeta.Nombre
          );
          this.modTarjeta.controls['numeroTarjeta'].setValue(
            this.tarjeta.Numero
          );
          this.modTarjeta.controls['mesVencimiento'].setValue(
            this.tarjeta.Ven_Mes
          );
          this.modTarjeta.controls['yearVencimiento'].setValue(
            this.tarjeta.Ven_year
          );
        },
      });
  }
  guardar(): void {
    this.tarjeta.Nombre = this.modTarjeta.controls['nombreTarjeta'].value;
    this.tarjeta.Numero = this.modTarjeta.controls['numeroTarjeta'].value;
    this.tarjeta.Ven_Mes = this.modTarjeta.controls['mesVencimiento'].value;
    this.tarjeta.Ven_year = this.modTarjeta.controls['yearVencimiento'].value;
    this.tarjeta.Codigo = this.modTarjeta.controls['codigoTarjeta'].value;
    this.tarjetaServicio.update(this.tarjeta).subscribe({
      complete: () => {
        if (this.ref) {
          this.ref.close();
        }
        this.router.navigate(['Protected/usuario/personalData']);
      },
    });
  }
}
