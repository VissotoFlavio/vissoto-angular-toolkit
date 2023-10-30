import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { NgModule } from '@angular/core';
import { SharingComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [ComponentsComponent],
  providers: [],
  imports: [CommonModule, ComponentsRoutingModule, SharingComponentsModule],
})
export class ComponentsModule {}
