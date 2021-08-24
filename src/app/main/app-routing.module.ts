import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {} from '../MercaLibre/public/Modulo/login.module';
// import {} from '../MercaLibre/protected/home/Module/home.module'
const routes: Routes = [

  {path: 'Login',
    loadChildren: () =>
      import('../MercaLibre/public/Modulo/login.module').then(
        (module) => module.LoginModule
      ),
  },

  {path: 'Protected',
  loadChildren: () =>
    import('../MercaLibre/protected/home/Module/home.module').then(
      (module) => module.HomeModule
    ),
  },
  { path: '', redirectTo: 'Login', pathMatch: 'full' },

  // {path:'', redirectTo:'Login', pathMatch:'full' },
  // {path:'Tarjeta',  component:TarjetaComponent, canActivate:[UsuarioguardGuard] },
  // {path:'Agregartarjeta', component:NuevaTarjetaComponent , canActivate:[UsuarioguardGuard]},
  // {path:'home',component:HomeComponent, canActivate:[UsuarioguardGuard]},
  // {path:'usuario',component:UsuariosComponent , canActivate:[UsuarioguardGuard]},
  // {path:'*', redirectTo:'Login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
