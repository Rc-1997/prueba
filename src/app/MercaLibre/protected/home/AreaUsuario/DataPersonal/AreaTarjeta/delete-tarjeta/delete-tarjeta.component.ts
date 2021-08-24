import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { filter, find } from 'rxjs/operators';
import { Tarjeta } from 'src/app/MercaLibre/IData/Tarjeta';
import { TarjetaService } from 'src/app/MercaLibre/servicios/tarjeta.service';

@Component({
  selector: 'app-delete-tarjeta',
  templateUrl: './delete-tarjeta.component.html',
  styleUrls: ['./delete-tarjeta.component.css'],
})
export class DeleteTarjetaComponent implements OnInit {
  @Input() idTarjeta: number;
  @Input() refModal: NgbModalRef;
  tarjeta: Tarjeta;
  idUser: number;
  constructor(private tarjetaService: TarjetaService, private router: Router) {
    this.idUser = +localStorage.getItem('idUser');
  }

  ngOnInit(): void {
    this.tarjetaService
      .getTarjetas()
      .pipe(
        find((tarjeta) =>
          tarjeta.id == this.idTarjeta
            ? true
            : false
        )
      )
      .subscribe((tarjeta) => (this.tarjeta = tarjeta));
  }
  eliminar() {

    console.log(this.tarjeta, this.idTarjeta);
    this.tarjetaService.delete(this.tarjeta).subscribe({
      complete: () => {
        this.close(true);
      },
    });
    // this.tarjetaService
    //   .getTarjetas()
    //   .pipe(filter((tarj) => (this.idUser == tarj.userid ? true : false)))
    //   .subscribe((t) => console.log(t));
  }

  close(result:boolean) {
    this.refModal
      ? this.refModal.close(result)
      : this.router.navigate(['Protected/usuario/personalData']);
  }
}
