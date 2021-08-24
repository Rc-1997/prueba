import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CrearDireccionComponent } from '../crear-direccion/crear-direccion.component';
import { SeleccionarDireccionComponent } from '../seleccionar-direccion/seleccionar-direccion.component';
import { direccionRouting } from './direccion-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { DireccionComponent } from '../direccion/direccion.component';
import { ModDomicilioComponent } from '../mod-direccion/moddomicilio.component';
import { DomicilioService } from 'src/app/MercaLibre/servicios/domicilio.service';

@NgModule({
  declarations: [
    ModDomicilioComponent,
    SeleccionarDireccionComponent,
    CrearDireccionComponent,
    DireccionComponent,
  ],
  imports: [
    CommonModule,
    direccionRouting,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  providers: [DomicilioService],
  exports: [
    ModDomicilioComponent,
    SeleccionarDireccionComponent,
    CrearDireccionComponent,
    DireccionComponent,
  ],
  entryComponents:[
    ModDomicilioComponent,
    SeleccionarDireccionComponent,
    CrearDireccionComponent,
    DireccionComponent
  ]
})
export class DireccionModule {}
