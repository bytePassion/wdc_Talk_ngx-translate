import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomeComponent } from './welcome.component';
import { pipe, of } from 'rxjs';
import { RoundingPipe} from '../pipes/rounding.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageService } from '../service/page.service';



describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  const pageServiceMock: jasmine.SpyObj<PageService> = jasmine.createSpyObj('PageService', ['getWelcomePageData']);

  beforeEach(async(() => {

    pageServiceMock.getWelcomePageData.and.returnValue(of({first: 1, second: 2}));

    TestBed.configureTestingModule({
      declarations: [
        WelcomeComponent,
        RoundingPipe
      ],
      providers: [
        { provide: PageService, useValue: pageServiceMock }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get values from backend', () => {

    // Act
    component.onClick();

    // Assert
    expect(pageServiceMock.getWelcomePageData).toHaveBeenCalledTimes(1);
    expect(component.firstNumber).toBe(1);
    expect(component.secondNumber).toBe(2);
  });

});
