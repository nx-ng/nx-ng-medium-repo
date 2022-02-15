import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component50Component } from './lib0component50.component';

describe('Lib0component50Component', () => {
  let component: Lib0component50Component;
  let fixture: ComponentFixture<Lib0component50Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component50Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
