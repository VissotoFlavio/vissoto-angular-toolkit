import { CommonModule } from '@angular/common';
import { HttpClienteComponent } from './http-cliente.component';
import { HttpClienteRoutingModule } from './http-cliente-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HttpClienteComponent],
  imports: [CommonModule, HttpClienteRoutingModule],
})
export class HttpClienteModule {}
