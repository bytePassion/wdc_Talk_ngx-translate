import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOneComponent } from './page-one.component';
import {of} from 'rxjs';
import {PageOneService} from './page-one.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

describe('PageOneComponent', () => {
  let component: PageOneComponent;
  let fixture: ComponentFixture<PageOneComponent>;

  const pageOneServiceMock: jasmine.SpyObj<PageOneService> = jasmine.createSpyObj('PageOneService', ['getMyData']);
  const modalServiceMock: jasmine.SpyObj<BsModalService> = jasmine.createSpyObj('BSModalService', ['show']);
  const testData = 'test';

  beforeEach(async(() => {
    pageOneServiceMock.getMyData.and.returnValue(of(testData));
    modalServiceMock.show.and.returnValue(new BsModalRef());

    TestBed.configureTestingModule({
      declarations: [ PageOneComponent ],
      providers: [{ provide: PageOneService, useValue: pageOneServiceMock }, {provide: BsModalService, useValue: modalServiceMock}],
    }).overrideTemplate(PageOneComponent, '')
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
    component.openModal(null);
    expect(modalServiceMock.show).toHaveBeenCalled();
    expect(pageOneServiceMock.getMyData).toHaveBeenCalled();
    expect(component.mydata).toBe(testData);
  });
});
