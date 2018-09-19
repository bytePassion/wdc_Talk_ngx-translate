import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTwoComponent } from './page-two.component';
import { PageService } from '../service/page.service';

describe('PageTwoComponent', () => {
  let component: PageTwoComponent;
  let fixture: ComponentFixture<PageTwoComponent>;

  const pageServiceMock: jasmine.SpyObj<PageService> = jasmine.createSpyObj('PageService', ['getPageTwoData']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTwoComponent ],
      providers: [{ provide: PageService, useValue: pageServiceMock }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
