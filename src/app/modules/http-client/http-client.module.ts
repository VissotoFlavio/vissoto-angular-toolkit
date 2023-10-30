import { CommonModule } from '@angular/common';
import { HttpClientComponent } from './http-client.component';
import { HttpClientRoutingModule } from './http-client-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HttpClientComponent],
  imports: [CommonModule, HttpClientRoutingModule],
})
export class HttpClientModule {}
