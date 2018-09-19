import { TestBed, inject } from '@angular/core/testing';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { PageService } from './page.service';


const httpClientMock: jasmine.SpyObj<HttpClient> = jasmine.createSpyObj('HttpClient', ['get']);
const testData = 'test';

describe('PageService', () => {
  beforeEach(() => {
    httpClientMock.get.and.returnValue(of(testData));


    TestBed.configureTestingModule({
      providers: [PageService,
        { provide: HttpClient, useValue: httpClientMock }]
    });
  });

  it('getMyData should fetch data from backend', inject([PageService], (service: PageService) => {
    service.getPageOneData();
    expect(httpClientMock.get).toHaveBeenCalledTimes(1);
  }));
});
