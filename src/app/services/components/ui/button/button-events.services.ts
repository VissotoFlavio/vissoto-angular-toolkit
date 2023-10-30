import { HttpMethod, HttpRequestClientServices } from '@vissoto-angular/http-client';

import { ButtonEvents } from '../../../../interfaces/components/ui/button/button-events.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ButtonServices {
  constructor(private http: HttpRequestClientServices) {}

  private readonly httpUrlBase = 'assets/json/components/ui/button/';

  getButtonEvents(): Observable<ButtonEvents[]> {
    return this.http.execute<ButtonEvents[]>(HttpMethod.Get, this.httpUrlBase + 'button-events.json');
  }
}
