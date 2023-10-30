import { HttpMethod, HttpRequestClientServices } from '@vissoto-angular/http-client';
import { map, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { CodeViewer } from '../../../components/code-viewer/interfaces/code-viewer.interface';
import { EventsRequest } from '../../../interfaces/components/events.interface';
import { AlertRequest } from '../../../interfaces/components/ui/alert.request';
import { CalendarRequest } from '../../../interfaces/components/ui/calendar.request';
import { CheckboxRequest } from '../../../interfaces/components/ui/checkbox.request.interface';
import { InputTextRequest } from '../../../interfaces/components/ui/input-text.request.interface';
import { ModalRequest } from '../../../interfaces/components/ui/modal.request.interface';
import { RequestDefault } from '../../../interfaces/request/request.interface';
import { AttributesItem } from './../../../interfaces/components/attributes.interface';

@Injectable({ providedIn: 'root' })
export class UIServices {
  constructor(private http: HttpRequestClientServices) {}

  private readonly httpUrlBase = 'assets/json/components/ui/';

  getCheckboxCodes(): Observable<RequestDefault<CheckboxRequest>> {
    return this.http.execute<RequestDefault<CheckboxRequest>>(HttpMethod.Get, this.httpUrlBase + 'checkbox.json');
  }

  getInputTextCodes(): Observable<RequestDefault<InputTextRequest>> {
    return this.http.execute<RequestDefault<InputTextRequest>>(HttpMethod.Get, this.httpUrlBase + 'input-text.json');
  }

  getModalCodes(): Observable<RequestDefault<ModalRequest>> {
    return this.http.execute<RequestDefault<ModalRequest>>(HttpMethod.Get, this.httpUrlBase + 'modal.json');
  }

  getAlertCodes(): Observable<RequestDefault<AlertRequest>> {
    return this.http.execute<RequestDefault<AlertRequest>>(HttpMethod.Get, this.httpUrlBase + 'alert.json');
  }

  getCalendarCodes(): Observable<RequestDefault<CalendarRequest>> {
    return this.http.execute<RequestDefault<CalendarRequest>>(HttpMethod.Get, this.httpUrlBase + 'calendar.json');
  }

  getEvents(): Observable<RequestDefault<EventsRequest>> {
    return this.http.execute<RequestDefault<EventsRequest>>(HttpMethod.Get, this.httpUrlBase + 'events.json');
  }

  getSizeEnum(): Observable<RequestDefault<CodeViewer>> {
    return this.http.execute<RequestDefault<CodeViewer>>(HttpMethod.Get, this.httpUrlBase + 'size-enum.json');
  }

  getAttributes(items: string[]): Observable<RequestDefault<AttributesItem[]>> {
    return this.http.execute<RequestDefault<AttributesItem[]>>(HttpMethod.Get, this.httpUrlBase + 'attributes.json').pipe(
      map((x: RequestDefault<AttributesItem[]>) => {
        const nArray = x.data
          .filter((i) => items.includes(i.name))
          .sort((a: AttributesItem, b: AttributesItem) => {
            if (a.name < b.name) {
              return -1;
            }
            return 1;
          });
        return { data: nArray } as RequestDefault<AttributesItem[]>;
      })
    );
  }
}
