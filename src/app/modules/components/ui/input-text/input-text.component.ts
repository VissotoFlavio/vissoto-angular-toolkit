import { Component, OnInit } from '@angular/core';

import { AttributesItem } from '../../../../interfaces/components/attributes.interface';
import { BorderStyle } from './../../../../interfaces/components/ui/style/border.interface';
import { CodeViewer } from 'src/app/components/code-viewer/interfaces/code-viewer.interface';
import { EventsRequest } from './../../../../interfaces/components/events.interface';
import { FormControl } from '@angular/forms';
import { InputTextRequest } from '../../../../interfaces/components/ui/input-text.request.interface';
import { RequestDefault } from '../../../../interfaces/request/request.interface';
import { UIServices } from './../../../../services/components/ui/ui.services';
import { UIStyleServices } from '../../../../services/components/ui/style.services';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements OnInit {
  constructor(private uiServices: UIServices, private uiStyleServices: UIStyleServices) {}

  controlText = new FormControl();

  valuesPage: InputTextRequest = {} as InputTextRequest;

  componentName = 'Input Text';

  ngOnInit(): void {
    this.getSizeEnumRequest();
    this.getValuesPageRequest();
    this.getEventsPage();
    this.changeFormControl();
    this.getStylesRequest();
  }

  private getEventsPage(): void {
    this.uiServices.getEvents().subscribe({
      next: (x: RequestDefault<EventsRequest>) => {
        this.valuesPage.events = [];
        x.data.ClipboardEvents.forEach((element) => {
          this.valuesPage.events.push(element);
        });
        x.data.FormEvents.forEach((element) => {
          this.valuesPage.events.push(element);
        });
        x.data.KeyboardEvents.forEach((element) => {
          this.valuesPage.events.push(element);
        });
        x.data.MouseEvents.forEach((element) => {
          this.valuesPage.events.push(element);
        });
      },
    });
  }

  private getValuesPageRequest(): void {
    this.uiServices.getInputTextCodes().subscribe({
      next: (x: RequestDefault<InputTextRequest>) => {
        this.valuesPage.codeModule = x.data.codeModule;
        this.valuesPage.rounded = x.data.rounded;
        this.valuesPage.cssClassInput = x.data.cssClassInput;
        this.valuesPage.codeControlForm = x.data.codeControlForm;
        this.getAttributesHTML(x.data.attributes);
      },
    });
  }

  private getSizeEnumRequest(): void {
    this.uiServices.getSizeEnum().subscribe({
      next: (x: RequestDefault<CodeViewer>) => {
        this.valuesPage.roundedEnum = x.data;
      },
    });
  }

  private getAttributesHTML(itens: string[]): void {
    this.uiServices.getAttributes(itens).subscribe({
      next: (x: RequestDefault<AttributesItem[]>) => {
        this.valuesPage.attributesHTML = x.data;
      },
    });
  }

  private changeFormControl(): void {
    this.controlText.valueChanges.subscribe({
      next: (v) => {
        console.log(v);
      },
    });
  }

  private getStylesRequest(): void {
    this.uiStyleServices.getBorder().subscribe({
      next: (x: RequestDefault<BorderStyle>) => {
        this.valuesPage.borderStyle = x.data.radius;
      },
    });
  }
}
