import { RouterModule, Routes } from '@angular/router';

import { HttpClientComponent } from './http-client.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: HttpClientComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HttpClientRoutingModule {}
