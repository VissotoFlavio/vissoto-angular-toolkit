import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { TictactoeComponent } from './tictactoe.component';

const routes: Routes = [
  {
    path: '',
    component: TictactoeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TictactoeRoutingModule {}
