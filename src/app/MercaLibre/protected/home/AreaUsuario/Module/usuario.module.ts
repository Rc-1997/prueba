import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModDataPersonalComponent } from '../mod-data-personal/mod-data-personal.component';
import { DataPersonalComponent } from '../DataPersonal/DataPersonal.component';
import { DeleteUsuarioComponent } from '../delete-usuario/delete-usuario.component';
import { TelefonoModule } from '../DataPersonal/AreaTelefono/Module/telefono.module';
import { DireccionModule } from '../DataPersonal/AreaDireccion/Module/direccion.module';
import { TarjetaModule } from '../DataPersonal/AreaTarjeta/Module/tarjeta.module';
import { usuarioRouting } from './usuario-routing.module';
import { DomicilioService } from 'src/app/MercaLibre/servicios/domicilio.service';
import { TarjetaService } from 'src/app/MercaLibre/servicios/tarjeta.service';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    DeleteUsuarioComponent,
    ModDataPersonalComponent,
    DataPersonalComponent,
  ],
  imports: [

    CommonModule,
    usuarioRouting,
    FormsModule,
    ReactiveFormsModule,
    TelefonoModule,
    DireccionModule,
    TarjetaModule,
  ],
  providers: [
    // PruebaService
    DomicilioService,
    TarjetaService,
  ],
  exports: [
    DeleteUsuarioComponent,
    ModDataPersonalComponent,
    DataPersonalComponent,
    TelefonoModule,
    DireccionModule,
    TarjetaModule,
  ],
})
export class UsuarioModule {}
