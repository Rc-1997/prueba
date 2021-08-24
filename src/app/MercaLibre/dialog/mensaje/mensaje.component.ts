import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css'],
})
export class MensajeComponent implements OnInit {
  @Input() mensaje:string;
  @Input() referencia;
  constructor(
    private modalService: NgbModal,

    // public dialogRef: MatDialogRef<MensajeComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: string[]
    ) {}

  ngOnInit(): void {
    // console.log(this.mensaje);
    // let mensajeText= document.getElementById('mensaje');
    // mensajeText.setAttribute('value',this.mensaje);
    // console.log(mensajeText.getAttribute('value'));
  }
  close(): void {
    (this.referencia)?
    this.referencia.close():
    console.log('no es modal')
  }


}
