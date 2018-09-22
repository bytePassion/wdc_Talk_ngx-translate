import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RoundingToCurrencyPipe} from '../pipes/rounding-to-currency.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PageService } from '../service/page.service';
import { PageThreeComponent } from './page-three.component';



describe('PageThreeComponent', () => {
  let component: PageThreeComponent;
  let fixture: ComponentFixture<PageThreeComponent>;

  const pageServiceMock: jasmine.SpyObj<PageService> = jasmine.createSpyObj('PageService', ['getPageThreeData']);

  beforeEach(async(() => {

    pageServiceMock.getPageThreeData.and.returnValue(of({first: 1, second: 2}));

    TestBed.configureTestingModule({
      declarations: [
        PageThreeComponent,
        RoundingToCurrencyPipe
      ],
      providers: [
        { provide: PageService, useValue: pageServiceMock }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get values from service', () => {

    // Act
    component.onClick();

    // Assert
    expect(pageServiceMock.getPageThreeData).toHaveBeenCalledTimes(1);
    expect(component.firstNumber).toBe(1);
    expect(component.secondNumber).toBe(2);
  });

});
