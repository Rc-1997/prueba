import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { modTarjetaComponent } from '../mod-tarjeta/modTarjeta.component';
import { SelectTarjetaComponent } from '../select-tarjeta/select-tarjeta.component';
import { TarjetaComponent } from '../tarjeta/tarjeta.component';
import { NuevaTarjetaComponent } from '../crear-tarjeta/nueva-tarjeta.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { tarjetaRouting } from './tarjeta-routing.module';
import { TarjetaService } from 'src/app/MercaLibre/servicios/tarjeta.service';

@NgModule({
  declarations: [
    NuevaTarjetaComponent,
    modTarjetaComponent,
    SelectTarjetaComponent,
    TarjetaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    tarjetaRouting,
  ],
  providers: [
    TarjetaService
  ],
  exports: [
    NuevaTarjetaComponent,
    modTarjetaComponent,
    SelectTarjetaComponent,
    TarjetaComponent,
  ],
})
export class TarjetaModule {}
