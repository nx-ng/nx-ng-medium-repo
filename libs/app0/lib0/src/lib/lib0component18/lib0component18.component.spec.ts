import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component18Component } from './lib0component18.component';

describe('Lib0component18Component', () => {
  let component: Lib0component18Component;
  let fixture: ComponentFixture<Lib0component18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
