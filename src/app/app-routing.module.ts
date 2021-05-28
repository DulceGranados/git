import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {
    path: 'inicio',

    component: InicioComponent
  },
  {
    path: 'acerca',

    component: AcercaComponent
  },
  {
    path: 'contacto',

    component: ContactoComponent
  },
  {
    path: 'error',

    component: ErrorComponent
  },
  {
    path: '**',

    redirectTo: 'error'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
