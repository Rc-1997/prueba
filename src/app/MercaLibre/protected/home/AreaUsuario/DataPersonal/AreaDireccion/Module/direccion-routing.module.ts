import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearDireccionComponent } from '../crear-direccion/crear-direccion.component';
import { DeletedireccionComponent } from '../deletedireccion/deletedireccion.component';
import { DireccionComponent } from '../direccion/direccion.component';
import { ModDomicilioComponent } from '../mod-direccion/moddomicilio.component';
import { SeleccionarDireccionComponent } from '../seleccionar-direccion/seleccionar-direccion.component';

const rutasDireccion: Routes = [
  {
    path: 'direccion',
    children: [
      {
        path: 'crear',
        component: CrearDireccionComponent,
      },
      {
        path: 'mod/:idDom',
        component: ModDomicilioComponent,
      },
      {
        path:'del', component:DeletedireccionComponent
      },
      {
        path: 'select', component: SeleccionarDireccionComponent
      },
      {
        path:'',component:DireccionComponent, pathMatch:'full'
      },
      {
        path: '**', redirectTo: '', pathMatch: 'full' },

    ],
  }

];

@NgModule({
  imports: [RouterModule.forChild(rutasDireccion)],
  exports: [RouterModule],
})
export class direccionRouting {}
