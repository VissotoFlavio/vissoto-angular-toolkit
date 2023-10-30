import { CommonModule } from '@angular/common';
import { ErrorRoutingModule } from './error-routing.module';
import { NgModule } from '@angular/core';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [PagenotfoundComponent],
  imports: [CommonModule, ErrorRoutingModule],
})
export class ErrorModule {}
