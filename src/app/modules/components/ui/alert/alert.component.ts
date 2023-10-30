import { COLOR, ROUNDED, SIZE } from '@vissoto-angular/ui';
import { Component, OnInit } from '@angular/core';

import { AlertRequest } from '../../../../interfaces/components/ui/alert.request';
import { ColorStyle } from '../../../../interfaces/components/ui/style/color.interface';
import { EventsRequest } from '../../../../interfaces/components/events.interface';
import { RequestDefault } from '../../../../interfaces/request/request.interface';
import { UIServices } from '../../../../services/components/ui/ui.services';
import { UIStyleServices } from '../../../../services/components/ui/style.services';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  constructor(private uiServices: UIServices, private uiStyleServices: UIStyleServices) {}

  eRounded = ROUNDED;
  eSize = SIZE;
  eColor = COLOR;

  valuesPage: AlertRequest = {} as AlertRequest;

  ngOnInit(): void {
    this.getValuesPageRequest();
    this.getStylesRequest();
  }

  private getValuesPageRequest(): void {
    this.uiServices.getAlertCodes().subscribe({
      next: (x: RequestDefault<AlertRequest>) => {
        this.valuesPage = x.data;
        this.getEventsPage();
      },
    });
  }

  private getEventsPage(): void {
    this.uiServices.getEvents().subscribe({
      next: (x: RequestDefault<EventsRequest>) => {
        this.valuesPage.events = [];
        x.data.CustomEvents.forEach((element) => {
          this.valuesPage.events.push(element);
        });
      },
    });
  }

  private getStylesRequest(): void {
    this.uiStyleServices.getColor().subscribe({
      next: (x: RequestDefault<ColorStyle>) => {
        this.valuesPage.colorStyle = x.data;
      },
    });
  }
}
