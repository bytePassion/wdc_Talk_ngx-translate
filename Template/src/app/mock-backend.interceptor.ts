import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Numbers } from './models/numbers';

@Injectable()
export class MockBackend implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.endsWith('/api/numbers/fancy') && request.method === 'GET') {

      const fancyNumbers: Numbers = {
        first: this.getRandomFloat(0, 100),
        second: this.getRandomFloat(1100, 2000)
      };

      return of(new HttpResponse({ status: 200, body: fancyNumbers }));
    }

    if (request.url.endsWith('/api/pageOne') && request.method === 'GET') {
      return of(new HttpResponse({ status: 200, body: 'string data from the Backend!' }));
    }

    if (request.url.endsWith('/api/pageTwo') && request.method === 'GET') {

      const fancyInts: Numbers = {
        first: this.getRandomInt(200, 800),
        second: this.getRandomInt(2000, 8000)
      };

      return of(new HttpResponse({ status: 200, body: fancyInts }));
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
