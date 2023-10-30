import { HttpMethod, HttpRequestClientServices } from '@vissoto-angular/http-client';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestDefault } from '../../../../interfaces/request/request.interface';
import { SelectRequest } from '../../../../interfaces/components/ui/select/select-request.interface';

@Injectable({ providedIn: 'root' })
export class SelectServices {
  constructor(private http: HttpRequestClientServices) {}

  private readonly httpUrlBase = 'assets/json/components/ui/select/';

  getSelectCodes(): Observable<RequestDefault<SelectRequest>> {
    return this.http.execute<RequestDefault<SelectRequest>>(HttpMethod.Get, this.httpUrlBase + 'select.json');
  }
}
