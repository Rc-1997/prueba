import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home.component';
import { SharesModule } from '../../../share/shares.module';
import { UsuariosService } from '../../../servicios/usuarios.service';
import { DomicilioService } from '../../../servicios/domicilio.service';
import { TarjetaService } from '../../../servicios/tarjeta.service';
import { ProductosService } from '../../../servicios/productos.service';
import { HomeRouting } from './home-routing.module';

import { TelefonoService } from 'src/app/MercaLibre/servicios/telefono.service';
import { BaseComponent } from '../../base/base.component';
import { PruebacomponenteprotectComponent } from '../../pruebacomponenteprotect/pruebacomponenteprotect.component';
import { UsuarioModule } from '../AreaUsuario/module/usuario.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SeleccionarDireccionComponent } from '../AreaUsuario/DataPersonal/AreaDireccion/seleccionar-direccion/seleccionar-direccion.component';
import { BarraLateralComponent } from 'src/app/barra-lateral/barra-lateral.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeBodyComponent } from 'src/app/parcial/home-body/home-body.component';


@NgModule({
  declarations: [
    HomeBodyComponent,
    HomeComponent,
    BaseComponent,
    PruebacomponenteprotectComponent,
    BarraLateralComponent,
  ],
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharesModule,
    HomeRouting,
    MatToolbarModule,
    UsuarioModule,
    // StoreModule.forRoot({home:homeColeccionReducer})
    // DireccionModule
  ],
  entryComponents: [SeleccionarDireccionComponent],

  providers: [
    UsuariosService,
    DomicilioService,

    TarjetaService,
    ProductosService,
    TelefonoService,
  ],
  exports: [HomeComponent, BarraLateralComponent],
  // bootstrap: [BaseComponent],
})
export class HomeModule { }
