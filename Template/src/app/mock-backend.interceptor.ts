import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Numbers } from './models/numbers';
import { map } from 'rxjs/operators';

@Injectable()
export class MockBackend implements HttpInterceptor {

  private page1Alert1 = 'One example to show in an alert';
  private page1Alert2 = 'Another example to show in an alert';
  private page1Counter = 0;

  constructor(private readonly httpClient: HttpClient) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.endsWith('/api/pageOne') && request.method === 'GET') {

      const content = (this.page1Counter++ % 2 === 0) ? this.page1Alert1 : this.page1Alert2;
      return of(new HttpResponse({ status: 200, body: content }));
    }

    if (request.url.endsWith('/api/pageTwo') && request.method === 'GET') {

      const fancyInts: Numbers = {
        first: this.getRandomInt(200, 800),
        second: this.getRandomInt(2000, 8000)
      };
      return of(new HttpResponse({ status: 200, body: fancyInts }));
    }

    if (request.url.endsWith('/api/pageThree') && request.method === 'GET') {

      const fancyNumbers: Numbers = {
        first: this.getRandomFloat(0, 100),
        second: this.getRandomFloat(1100, 2000)
      };
      return of(new HttpResponse({ status: 200, body: fancyNumbers }));
    }

    if (request.url.endsWith('/api/translation/en') && request.method === 'GET') {
      return this.httpClient.get('assets/translations/en.json')
                 .pipe(map((res: any) => new HttpResponse({ status: 200, body: res })));
    }

    if (request.url.endsWith('/api/translation/de') && request.method === 'GET') {
      return this.httpClient.get('assets/translations/de.json')
                 .pipe(map((res: any) => new HttpResponse({ status: 200, body: res })));
    }

    if (request.url.endsWith('/api/translation/la') && request.method === 'GET') {
      return of(new HttpResponse({ status: 200, body: JSON.parse('{}') }));
    }

    return next.handle(request);
  }

  private getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

  private getRandomInt(min, max) {
    return Math.round(this.getRandomFloat(min, max));
  }

}
