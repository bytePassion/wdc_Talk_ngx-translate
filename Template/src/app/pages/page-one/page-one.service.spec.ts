import { TestBed, inject } from '@angular/core/testing';
import { PageOneService } from './page-one.service';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';


const httpClientMock: jasmine.SpyObj<HttpClient> = jasmine.createSpyObj('HttpClient', ['get']);
const testData = 'test';

describe('PageOneService', () => {
  beforeEach(() => {
    httpClientMock.get.and.returnValue(of(testData));


    TestBed.configureTestingModule({
      providers: [PageOneService,
        { provide: HttpClient, useValue: httpClientMock }]
    });
  });

  it('getMyData should fetch data from backend', inject([PageOneService], (service: PageOneService) => {
    service.getMyData();
    expect(httpClientMock.get).toHaveBeenCalledTimes(1);
  }));
});
