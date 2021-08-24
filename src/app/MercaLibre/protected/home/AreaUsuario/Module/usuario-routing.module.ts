import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataPersonalComponent } from '../DataPersonal/DataPersonal.component';
import { DeleteUsuarioComponent } from '../delete-usuario/delete-usuario.component';
import { ModDataPersonalComponent } from '../mod-data-personal/mod-data-personal.component';

const rutasUsuario: Routes = [

  {
    path: '',
    children: [
      {
        path: 'personalData',
        component: DataPersonalComponent,
      },
      { path: 'mod', component: ModDataPersonalComponent },
      { path: 'del', component: DeleteUsuarioComponent },
      {
        path: 'direccion',
        loadChildren: () =>
          import('../DataPersonal/AreaDireccion/Module/direccion.module').then(
            (m) => m.DireccionModule
          ),
      },
      {
        path: 'telefono',
        loadChildren: () =>
          import('../DataPersonal/AreaTelefono/Module/telefono.module').then(
            (m) => m.TelefonoModule
          ),
      },
      {
        path: 'tarjeta',
        loadChildren: () =>
          import('../DataPersonal/AreaTarjeta/Module/tarjeta.module').then(
            (m) => m.TarjetaModule
          ),
      },
      // { path: '**', redirectTo: 'personalData', pathMatch: 'full' },
      // { path: '', redirectTo: 'personalData', pathMatch: 'full' },
    ],
  }

];

@NgModule({
  imports: [RouterModule.forChild(rutasUsuario)],
  exports: [RouterModule],
})
export class usuarioRouting {}
