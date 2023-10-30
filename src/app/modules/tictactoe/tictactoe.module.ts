import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TictactoeComponent } from './tictactoe.component';
import { TictactoeRoutingModule } from './tictactoe-routing.module';

@NgModule({
  declarations: [TictactoeComponent],
  imports: [CommonModule, TictactoeRoutingModule],
})
export class TictactoeModule {}
