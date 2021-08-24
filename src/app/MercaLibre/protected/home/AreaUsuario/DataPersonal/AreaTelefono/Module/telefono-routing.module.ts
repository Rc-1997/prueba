import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTelefonoComponent } from '../crear-telefono/crear-telefono.component';
import { DeleteTelefonoComponent } from '../delete-telefono/delete-telefono.component';
import { ModTelefonoComponent } from '../mod-telefono/ModTelefono.component';
import { SelecttelefonoComponent } from '../selecttelefono/selecttelefono.component';
import { TelefonoComponent } from '../telefono/telefono.component';


const routes: Routes = [
   {
    path: 'telefono',

    children: [
      {
        path: 'crear',
        component: CrearTelefonoComponent,

      },
      {
        path:'mod',
        component:ModTelefonoComponent,
      },
      {
        path:'del', component:DeleteTelefonoComponent},
      {
        path:'select',component:SelecttelefonoComponent},
      {
        path:'',
        component:TelefonoComponent,
        pathMatch:'full'
      },
      { path: '**', redirectTo: '' , pathMatch:'full' }
    ]
  }
  // {path:'prueba', component:DataPersonalComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class telefonoRouting {}
