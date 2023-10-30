import { HttpMethod, HttpRequestClientServices } from '@vissoto-angular/http-client';
import { Observable, tap } from 'rxjs';
import { Sidebar, SidebarSecondary } from '../components/sidebar/interface/sidebar.interface';

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NavbarServices {
  constructor(private http: HttpRequestClientServices) {}

  private readonly httpUrlBase = 'assets/json/';

  getMenuPrincipal(): Observable<Sidebar[]> {
    return this.http.execute<Sidebar[]>(HttpMethod.Get, this.httpUrlBase + 'navbar-principal.json');
  }

  getMenuSecondary(): Observable<SidebarSecondary[]> {
    return this.http.execute<SidebarSecondary[]>(HttpMethod.Get, this.httpUrlBase + 'navbar-secondary.json').pipe(
      tap((result: SidebarSecondary[]) => {
        for (let index = 0; index < result.length; index++) {
          result[index].textAuxiliary = `${result[index].items.length - 1}`;
          result[index].items.sort((a: Sidebar, b: Sidebar) => {
            if (b.text != null && b.text != undefined && b.text.toLowerCase() == 'instalação') {
              return 1;
            } else {
              return a.text.localeCompare(b.text);
            }
          });
        }
      })
    );
  }
}
