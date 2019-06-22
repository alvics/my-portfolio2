import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleTextComponent } from './console-text.component';

describe('ConsoleTextComponent', () => {
  let component: ConsoleTextComponent;
  let fixture: ComponentFixture<ConsoleTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
