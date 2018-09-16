import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class MockBackend implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (request.url.endsWith('/api/numbers/fancy') && request.method === 'GET') {

            const fancyNumbers = {
                first: this.getRandomFloat(0, 100),
                second: this.getRandomFloat(1100, 2000)
            };

            return of(new HttpResponse({ status: 200, body: fancyNumbers }));
        }

      if (request.url.endsWith('/api/mydata') && request.method === 'GET') {

        return of(new HttpResponse({ status: 200, body: 'string data from the Backend!' }));
      }

        return next.handle(request);
    }

    private getRandomFloat(min, max) {
      return Math.random() * (max - min) + min;
    }

}
