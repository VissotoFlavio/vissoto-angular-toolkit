import { HttpMethod, HttpRequestClientServices } from '@vissoto-angular/http-client';

import { CardPost } from '../interfaces/card-post.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HomeServices {
  constructor(private http: HttpRequestClientServices) {}

  private readonly httpUrlBase = 'assets/json/';

  getLastPosts(): Observable<CardPost[]> {
    return this.http.execute<CardPost[]>(HttpMethod.Get, this.httpUrlBase + 'card-post.json');
  }
}
