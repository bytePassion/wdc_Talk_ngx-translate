import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOneComponent } from './page-one.component';
import {of} from 'rxjs';
import {PageService} from '../service/page.service';
import { PipeTransform, Pipe } from '@angular/core';

// @Pipe({name: 'translate'})
// class TranslateMockPipe implements PipeTransform {
//     transform(value) {
//         return value;
//     }

// }

describe('PageOneComponent', () => {
  let component: PageOneComponent;
  let fixture: ComponentFixture<PageOneComponent>;

  const testData = 'test';

  // const translateServiceMock = jasmine.createSpyObj('TranslateService', ['instant']);
  // translateServiceMock.instant.and.returnValue(testData);

  const pageServiceMock: jasmine.SpyObj<PageService> = jasmine.createSpyObj('PageService', ['getPageOneData']);

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

  it('should get value from service', () => {

    // Act
    component.onClick();

    // Assert
    expect(pageServiceMock.getPageOneData).toHaveBeenCalledTimes(1);
  });

  it('should show allert with correct message', () => {

    // Arrange
    spyOn(window, 'alert');

    // Act
    component.onClick();

    // Assert
    expect(window.alert).toHaveBeenCalledWith(testData);
  });
});
