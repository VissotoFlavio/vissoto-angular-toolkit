import { RouterModule, Routes } from '@angular/router';

import { HttpClienteComponent } from './http-cliente.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'utilizacao',
    pathMatch: 'full',
  },
  {
    path: 'utilizacao',
    component: HttpClienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HttpClienteRoutingModule {}
