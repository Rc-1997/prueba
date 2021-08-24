import { Component, OnInit,Input } from '@angular/core';
import { errorMsj } from '../../IData/errorMsj';

@Component({
  selector: 'app-error-mensaje',
  templateUrl: './error-mensaje.component.html',
  styleUrls: ['./error-mensaje.component.css']
})
export class ErrorMensajeComponent implements OnInit {
  @Input() error:errorMsj;
  x:string;
  constructor() {
  }

  ngOnInit(): void {
  }

}
