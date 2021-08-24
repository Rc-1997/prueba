import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ErrorMensajeComponent } from '../dialog/error-mensaje/error-mensaje.component';
import { MensajeComponent } from '../dialog/mensaje/mensaje.component';
import { errorMsj } from '../IData/errorMsj';

// {
//   providedIn: 'root',
// }

@Injectable({
  providedIn: 'root',
})
export class MensajeService {
  historialMensajes: string[] = [];
  historialError: string[] = [];
  load: NgbModalRef;
  constructor(
    // public dialog: MatDialog,
    private modalService: NgbModal
  ) {
    // console.log('nuevo servicio mensaje');
  }
  public loadData() {
    if (!this.load) {
      this.load = this.modalService.open(MensajeComponent);
      this.load.componentInstance.mensaje = 'obteniendo datos';
    }
  }
  public closeLoadData() {
    if (this.load) {
      this.load.close();
    }
  }
  pruebaOpenModal(mensaje: string): NgbModalRef {
    const modalRef = this.modalService.open(MensajeComponent);
    modalRef.componentInstance.mensaje = mensaje;
    this.historialMensajes.push(mensaje);
    return modalRef;
  }

  openModal(paraMensaje: string): void {
    const modalRef = this.modalService.open(MensajeComponent);
    modalRef.componentInstance.mensaje = paraMensaje;
    modalRef.componentInstance.referencia = modalRef;
    this.historialMensajes.push(paraMensaje);
  }
  OpenError(errorMsj: errorMsj): void {
    const modalRef = this.modalService.open(ErrorMensajeComponent);
    modalRef.componentInstance.error = errorMsj;
    // errorMsj.mensajes.forEach(msj=> this.historialError.push(msj));
    this.historialError.push(errorMsj.mensajes);
    console.log(errorMsj);
  }
  // openComponent(componente:any){
  //   const modal= this.modalService.open(componente);

  // }

  // openDialog(paraMensaje: string[]): void {
  //   const dialogRef = this.dialog.open(MensajeComponent, {
  //     width: '250px',
  //     data: { mensajes: paraMensaje },
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     paraMensaje.forEach((msj) => this.historial.push(msj));
  //     console.log(this.historial);
  //   });
  // }
}
