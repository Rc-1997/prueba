import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicGuard } from '../guard/public.guard';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'Login',
        component: LoginComponent,
        canActivate: [PublicGuard],
      },
      {
        path: '**',
        redirectTo: 'Login',
        pathMatch: 'full',
      },
      {
        path: '',
        redirectTo: 'Login',
        pathMatch: 'full',
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRouting {}
