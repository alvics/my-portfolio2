import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevelopmetComponent } from './web-developmet.component';

describe('WebDevelopmetComponent', () => {
  let component: WebDevelopmetComponent;
  let fixture: ComponentFixture<WebDevelopmetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDevelopmetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDevelopmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
