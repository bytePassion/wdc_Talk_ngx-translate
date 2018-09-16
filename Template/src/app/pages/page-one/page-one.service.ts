import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageOneService {

  constructor(private http: HttpClient) { }

  public getMyData(): Observable<string> {
    return this.http.get('http://localhost.de/api/mydata').pipe(map((res) => String(res)));
  }
}
