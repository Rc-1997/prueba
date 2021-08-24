import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NuevaTarjetaComponent } from "../crear-tarjeta/nueva-tarjeta.component";
import { DeleteTarjetaComponent } from "../delete-tarjeta/delete-tarjeta.component";
import { modTarjetaComponent } from "../mod-tarjeta/modTarjeta.component";
import { SelectTarjetaComponent } from "../select-tarjeta/select-tarjeta.component";
import { TarjetaComponent } from "../tarjeta/tarjeta.component";

const rutasTarjeta: Routes = [
  // HomeComponent
  {
    path: 'tarjeta',
    children: [
      {
        path: 'crear',
        component: NuevaTarjetaComponent,
      },
      {
        path: 'mod/:numero',
        component: modTarjetaComponent,
        pathMatch:'full'
      },
      {
        path: 'select',
        component: SelectTarjetaComponent,
      },
      {
        path: 'del',
        component: DeleteTarjetaComponent,
      },
      {
        path: '',
        component: TarjetaComponent,
        pathMatch: 'full',
      },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(rutasTarjeta)],
  exports: [RouterModule],
})
export class tarjetaRouting {}

