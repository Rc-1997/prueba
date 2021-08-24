import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMensajeComponent } from '../error-mensaje/error-mensaje.component';
import { MensajeComponent } from '../mensaje/mensaje.component';
import { MensajeService } from '../../servicios/mensaje.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  entryComponents:[
    ErrorMensajeComponent,
    MensajeComponent,
  ],
  exports:[
  ],
  providers:[
    MensajeService
  ]
})
export class DialogModule { }
