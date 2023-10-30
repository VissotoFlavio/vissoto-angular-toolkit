import { RouterModule, Routes } from '@angular/router';

import { NavbarServices } from './services/navbar.services';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: '',
    loadChildren: () => {
      return import('./modules/home/home.module').then((m) => m.HomeModule);
    },
  },
  {
    path: 'components',
    loadChildren: () => {
      return import('./modules/components/components.module').then((m) => m.ComponentsModule);
    },
  },
  {
    path: 'tictactoe',
    loadChildren: () => {
      return import('./modules/tictactoe/tictactoe.module').then((m) => m.TictactoeModule);
    },
  },
  {
    path: 'error',
    loadChildren: () => {
      return import('./modules/error/error.module').then((m) => m.ErrorModule);
    },
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/error/pagenotfound',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  providers: [NavbarServices],
  exports: [RouterModule],
})
export class AppRoutingModule {}
