import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { SharesModule } from '../../share/shares.module';
import { UsuariosService } from '../../servicios/usuarios.service';
import { ProductosService } from '../../servicios/productos.service';

import { PublicGuard } from '../guard/public.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRouting } from './Login-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { StoreFeatureModule, StoreModule } from '@ngrx/store';
import { coleccionReducerUsuario } from 'src/app/redux/reducer/usuario.reducre';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharesModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRouting,
  ],
  providers: [
    UsuariosService,
    ProductosService,
    // PublicGuard,
    // AuthService,
    // MensajeService
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
