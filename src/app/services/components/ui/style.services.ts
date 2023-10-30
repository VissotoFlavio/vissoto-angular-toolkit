import { HttpMethod, HttpRequestClientServices } from '@vissoto-angular/http-client';

import { BorderStyle } from './../../../interfaces/components/ui/style/border.interface';
import { ColorStyle } from '../../../interfaces/components/ui/style/color.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestDefault } from '../../../interfaces/request/request.interface';

@Injectable({ providedIn: 'root' })
export class UIStyleServices {
  constructor(private http: HttpRequestClientServices) {}

  private readonly httpUrlBase = 'assets/json/components/ui/style/';

  getBorder(): Observable<RequestDefault<BorderStyle>> {
    return this.http.execute<RequestDefault<BorderStyle>>(HttpMethod.Get, this.httpUrlBase + 'border.json');
  }

  getColor(): Observable<RequestDefault<ColorStyle>> {
    return this.http.execute<RequestDefault<ColorStyle>>(HttpMethod.Get, this.httpUrlBase + 'color.json');
  }
}
