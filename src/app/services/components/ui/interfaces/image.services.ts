import { HttpMethod, HttpRequestClientServices } from '@vissoto-angular/http-client';

import { ImageRequest } from '../../../../interfaces/components/ui/interfaces/select-request.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestDefault } from '../../../../interfaces/request/request.interface';

@Injectable({ providedIn: 'root' })
export class ImageServices {
  constructor(private http: HttpRequestClientServices) {}

  private readonly httpUrlBase = 'assets/json/components/ui/interfaces/';

  getImageCodes(): Observable<RequestDefault<ImageRequest>> {
    return this.http.execute<RequestDefault<ImageRequest>>(HttpMethod.Get, this.httpUrlBase + 'image.json');
  }
}
