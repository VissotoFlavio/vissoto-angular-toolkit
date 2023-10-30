import {
  AlertModule,
  ButtonModule,
  CalendarModule,
  CheckboxModule,
  InputTextModule,
  ModalModule,
  SelectModule,
  TabModule,
  TooltipModule,
} from '@vissoto-angular/ui';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { AlertComponent } from './alert/alert.component';
import { ButtonComponent } from './button/button.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CommonModule } from '@angular/common';
import { DevComponent } from './dev/dev.component';
import { IcoComponent } from './icons/ico/ico.component';
import { IconsComponent } from './icons/icons.component';
import { InputTextComponent } from './input-text/input-text.component';
import { ModalComponent } from './modal/modal.component';
import { ModalServices } from '../../../components/dev-comp/services/modal.services';
import { NumberStepperComponent } from './number-stepper/number-stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SanitizeHtmlPipe } from 'src/app/pipes/sanitize.pipe';
import { SelectComponent } from './select/select.component';
import { SharingComponentsModule } from 'src/app/components/components.module';
import { TabComponent } from './tab/tab.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipIconsComponent } from './tooltip-icons/tooltip-icons.component';
import { UIRoutingModule } from './ui-routing.module';
import { UiComponent } from './ui.component';

@NgModule({
  declarations: [
    UiComponent,
    TooltipComponent,
    TooltipIconsComponent,
    CardComponent,
    ButtonComponent,
    SelectComponent,
    TabComponent,
    NumberStepperComponent,
    CheckboxComponent,
    InputTextComponent,
    IconsComponent,
    ModalComponent,
    IcoComponent,
    AlertComponent,
    CalendarComponent,
    DevComponent,
  ],
  providers: [SanitizeHtmlPipe, ModalServices],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UIRoutingModule,
    SharingComponentsModule,
    TooltipModule,
    // CardAlfaModule,
    ButtonModule,
    SelectModule,
    TabModule,
    CheckboxModule,
    InputTextModule,
    AlertModule,
    CalendarModule,
    ModalModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class UIModule {}
