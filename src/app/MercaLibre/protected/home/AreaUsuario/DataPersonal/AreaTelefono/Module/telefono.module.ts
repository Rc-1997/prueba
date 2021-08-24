import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModTelefonoComponent } from '../mod-telefono/ModTelefono.component';
import { CrearTelefonoComponent } from '../crear-telefono/crear-telefono.component';
import { DeleteTelefonoComponent } from '../delete-telefono/delete-telefono.component';
import { telefonoRouting } from './telefono-routing.module';
import { TelefonoComponent } from '../telefono/telefono.component';

@NgModule({
  declarations: [
    ModTelefonoComponent,
    CrearTelefonoComponent,
    DeleteTelefonoComponent,
    TelefonoComponent,
  ],
  imports: [
    CommonModule,
    telefonoRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [

  ],
  exports: [
    ModTelefonoComponent,
    CrearTelefonoComponent,
    DeleteTelefonoComponent,
    TelefonoComponent,
  ]
})
export class TelefonoModule {}
