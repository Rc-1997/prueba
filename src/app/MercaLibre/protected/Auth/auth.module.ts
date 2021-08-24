import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from '../componentes/login/login.component';
import { SharesModule } from './shares/shares.module';
import { AuthService } from '../servicios/auth.service';
import { UsuariosService } from '../servicios/usuarios.service';
@NgModule({
  declarations: [LoginComponent,
  ],
  imports: [
    SharesModule ,
    CommonModule,
    AuthRoutingModule,

  ],
  providers: [
    UsuariosService,
    AuthModule
  ],

})
export class AuthModule {}
