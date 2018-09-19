import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOneComponent } from './page-one.component';
import {of} from 'rxjs';
import {PageService} from '../service/page.service';

describe('PageOneComponent', () => {
  let component: PageOneComponent;
  let fixture: ComponentFixture<PageOneComponent>;

  const pageServiceMock: jasmine.SpyObj<PageService> = jasmine.createSpyObj('PageService', ['getPageOneData']);
  const testData = 'test';

  beforeEach(async(() => {

    pageServiceMock.getPageOneData.and.returnValue(of(testData));


    TestBed.configureTestingModule({
      declarations: [ PageOneComponent ],
      providers: [{ provide: PageService, useValue: pageServiceMock }],
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
    component.onClick();
    expect(pageServiceMock.getPageOneData).toHaveBeenCalledTimes(1);
  });
});
