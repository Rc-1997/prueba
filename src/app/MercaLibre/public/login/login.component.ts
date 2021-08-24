import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, RouterState } from '@angular/router';
import { select, State, Store, StoreRootModule } from '@ngrx/store';
import { concat, fromEvent, interval, of } from 'rxjs';
import {
  concatAll,
  delay,
  finalize,
  map,
  mergeAll,
  scan,
  takeLast,
  takeUntil,
  throttle,
  throttleTime,
} from 'rxjs/operators';
import { log } from 'src/app/redux/actions/log.accion';
import {
  addusuarioAction,
  getusuarioAction,
} from 'src/app/redux/actions/usuario.acciones';
import { storeApp } from 'src/app/redux/interfaz';
import {
  loginSelector,
  // loginSelector,
  usuarioSelector,
} from 'src/app/redux/selectores/usuario.select';
import { usuario } from '../../IData/usuarios';
import { ProductosService } from '../../servicios/productos.service';
import { PruebaService } from '../../servicios/prueba.service';
import { TarjetaService } from '../../servicios/tarjeta.service';

import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-Login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  Login_form: FormGroup;
  authuser: usuario;
  user: usuario;
  validUser: boolean = false;
  // productoA = this.prodService.getProdA();
  // productoB = this.prodService.getProdB();

  constructor(
    private store: Store<storeApp>,
    private fb: FormBuilder,
    private router: Router,
    // private modalService: NgbModal,
    private usuariosServicios: UsuariosService // private prodService: ProductosService, // private web:WebsocketService, // private pruebaService: PruebaService
  ) {
    this.Login_form = fb.group({
      nombre: new FormControl('pedro', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('[a-z]*')
      ]),
      password: new FormControl('hola1', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  Login() {
    var usuario_current = {
      name: this.Login_form.controls['nombre'].value,
      password: this.Login_form.controls['password'].value,
    };

    this.store.dispatch(log(usuario_current as usuario));

    this.router.navigate(['Protected/usuario/personalData']);
  }

  mostrar(): void {
    let password = document.getElementById('inputPassword');
    password.getAttribute('type') === 'password'
      ? password.setAttribute('type', 'text')
      : password.setAttribute('type', 'password');
  }

  ngOnInit(): void {
    // this.store.pipe(select(loginSelector)).subscribe().unsubscribe();
    // let usuario = { id: 2, userid:24, Numero: 123456789, Nombre: 'person1', Codigo: 1, Ven_Mes: 1, Ven_year: 11, }  ;
    // let user=usuario as unknown as usuario;
    // this.store.dispatch(addusuarioAction({  usuario:user }));
    this.store.dispatch(getusuarioAction());
  }
}
