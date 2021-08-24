import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectedGuard } from '../../guard/protected.guard';
import { PruebacomponenteprotectComponent } from '../../pruebacomponenteprotect/pruebacomponenteprotect.component';
import { HomeComponent } from '../home.component';
import { ResolverResolver } from 'src/app/parcial/resolver.resolver';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [ProtectedGuard],
    children: [
      {
        path: 'usuario',
        loadChildren: () =>
          import('../AreaUsuario/module/usuario.module').then(
            (m) => m.UsuarioModule
          ),
      },
      {
        path: 'prueba',
        component: PruebacomponenteprotectComponent,
        resolve: {
          usuarios: ResolverResolver,
        },
      },

      { path: '**', redirectTo: 'prueba', pathMatch: 'full' },
      { path: '', redirectTo: 'usuario', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRouting {}
