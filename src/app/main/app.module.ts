import { NgModule } from '@angular/core';

//servicio de memoria
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { InMemoryDataService } from '../MercaLibre/bd/in-memory-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AuthService } from '../MercaLibre/servicios/auth.service';
import { MensajeService } from '../MercaLibre/servicios/mensaje.service';

import { InterceptortarjetaService } from '../MercaLibre/share/interceptores/interceptortarjeta.service';
import { NavegacionInterceptor } from '../MercaLibre/share/interceptores/navegacion.interceptor';
import { HomeModule } from '../MercaLibre/protected/home/Module/home.module';
import { LoginModule } from '../MercaLibre/public/Modulo/login.module';
import { PruebaService } from '../MercaLibre/servicios/prueba.service';
import { StoreModule } from '@ngrx/store';
import { coleccionReducerUsuario } from '../redux/reducer/usuario.reducre';
import { EffectsModule, USER_PROVIDED_EFFECTS } from '@ngrx/effects';
import { usuariosEfectos } from '../redux/efectos/usuarios.efectos';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    StoreModule.forRoot({
      loginmodule: coleccionReducerUsuario,
      // logUsuario: logReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot([usuariosEfectos] ),
  ],

  providers: [
    // usuariosEfectos,
    // {
    //   provide: USER_PROVIDED_EFFECTS,
    //   multi: true,
    //   useValue: [usuariosEfectos],
    // },
    // logEfectos,
    // {
    //   provide:USER_PROVIDED_EFFECTS,
    //   multi:true,
    //   useValue:[logEfectos]
    // },

    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: InterceptortarjetaService,
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: NavegacionInterceptor,
    },
    AuthService,
    MensajeService,
    PruebaService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
