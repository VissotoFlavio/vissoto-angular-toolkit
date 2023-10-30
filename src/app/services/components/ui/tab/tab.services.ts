import { HttpMethod, HttpRequestClientServices } from '@vissoto-angular/http-client';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestDefault } from '../../../../interfaces/request/request.interface';
import { TabRequest } from '../../../../interfaces/components/ui/tab/tab-request.interface';

@Injectable({ providedIn: 'root' })
export class TabServices {
  constructor(private http: HttpRequestClientServices) {}

  private readonly httpUrlBase = 'assets/json/components/ui/tab/';

  getTabCodes(): Observable<RequestDefault<TabRequest>> {
    return this.http.execute<RequestDefault<TabRequest>>(HttpMethod.Get, this.httpUrlBase + 'tab.json');
  }
}
