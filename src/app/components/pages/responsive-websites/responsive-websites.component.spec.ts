import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveWebsitesComponent } from './responsive-websites.component';

describe('ResponsiveWebsitesComponent', () => {
  let component: ResponsiveWebsitesComponent;
  let fixture: ComponentFixture<ResponsiveWebsitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveWebsitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
