import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, first} from 'rxjs/operators';
import { Numbers } from '../../models/numbers';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient) { }

  public getWelcomePageData(): Observable<Numbers> {
    return this.http.get('http://localhost.de/api/numbers/fancy')
                    .pipe(map((res: Numbers) => res));
  }

  public getPageOneData(): Observable<string> {
    return this.http.get('http://localhost.de/api/pageOne')
                    .pipe(map((res) => String(res)));
  }

  public getPageTwoData(): Observable<Numbers> {
    return this.http.get('http://localhost.de/api/pageTwo')
                    .pipe(map((res: Numbers) => res));
  }
}
