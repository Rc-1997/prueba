//modulos generales que sirven para todos xd
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//directivas
import { ComponenteValidoDirective } from '../../MercaLibre/share/directivas/componente-valido.directive'
import { MostrarDirective } from '../../MercaLibre/share/directivas/mostrar.directive';
//pipes
import { StringPuraPipe } from '../../MercaLibre/share/pipes/string-pura.pipe';
import { StringimPuraPipe } from '../../MercaLibre/share/pipes/stringim-pura.pipe';
import { AuthService } from '../servicios/auth.service';
import { MensajeService } from '../servicios/mensaje.service';


@NgModule({
  declarations: [
    ComponenteValidoDirective,
    MostrarDirective,
    StringPuraPipe,
    StringimPuraPipe,

  ],
  imports: [
    // CommonModule,
    // BrowserModule,
    // FormsModule,
    // HttpClientModule,
    // ReactiveFormsModule,
  ],
  providers:[
  ],
  exports: [ ComponenteValidoDirective,
    MostrarDirective,
    StringPuraPipe,
    StringimPuraPipe,

    // BrowserModule,
    // FormsModule,
    // HttpClientModule,
    // ReactiveFormsModule,
   ],
})
export class SharesModule { }
