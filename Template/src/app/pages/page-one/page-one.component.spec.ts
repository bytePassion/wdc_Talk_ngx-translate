import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOneComponent } from './page-one.component';
import {of} from 'rxjs';
import {PageOneService} from './page-one.service';

describe('PageOneComponent', () => {
  let component: PageOneComponent;
  let fixture: ComponentFixture<PageOneComponent>;

  const pageOneServiceMock: jasmine.SpyObj<PageOneService> = jasmine.createSpyObj('PageOneService', ['getMyData']);
  const testData = 'test';

  beforeEach(async(() => {

    pageOneServiceMock.getMyData.and.returnValue(of(testData));


    TestBed.configureTestingModule({
      declarations: [ PageOneComponent ],
      providers: [{ provide: PageOneService, useValue: pageOneServiceMock }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get value from backend', () => {
    expect(pageOneServiceMock.getMyData).toHaveBeenCalled();
    expect(component.mydata).toBe(testData);
  });
});
