import { RouterModule, Routes } from '@angular/router';

import { AlertComponent } from './alert/alert.component';
import { ButtonComponent } from './button/button.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DevComponent } from './dev/dev.component';
import { IconsComponent } from './icons/icons.component';
import { InputTextComponent } from './input-text/input-text.component';
import { ModalComponent } from './modal/modal.component';
import { NgModule } from '@angular/core';
import { NumberStepperComponent } from './number-stepper/number-stepper.component';
import { SelectComponent } from './select/select.component';
import { TabComponent } from './tab/tab.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipIconsComponent } from './tooltip-icons/tooltip-icons.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tooltip',
    pathMatch: 'full',
  },
  {
    path: 'dev',
    component: DevComponent,
  },
  {
    path: 'tooltip',
    component: TooltipComponent,
  },
  {
    path: 'tooltip-icons',
    component: TooltipIconsComponent,
  },
  {
    path: 'card',
    component: CardComponent,
  },
  {
    path: 'button',
    component: ButtonComponent,
  },
  {
    path: 'select',
    component: SelectComponent,
  },
  {
    path: 'tab',
    component: TabComponent,
  },
  {
    path: 'number-stepper',
    component: NumberStepperComponent,
  },
  {
    path: 'checkbox',
    component: CheckboxComponent,
  },
  {
    path: 'input-text',
    component: InputTextComponent,
  },
  {
    path: 'icons',
    component: IconsComponent,
  },
  {
    path: 'modal',
    component: ModalComponent,
  },
  {
    path: 'alert',
    component: AlertComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UIRoutingModule {}
