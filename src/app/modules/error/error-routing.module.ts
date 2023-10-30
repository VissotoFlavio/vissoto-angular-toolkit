import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: PagenotfoundComponent,
  },
  {
    path: 'pagenotfound',
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
