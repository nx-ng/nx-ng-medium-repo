import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib0component9Component } from './lib0-lib0-lib0component9.component';

describe('Lib0Lib0Lib0component9Component', () => {
  let component: Lib0Lib0Lib0component9Component;
  let fixture: ComponentFixture<Lib0Lib0Lib0component9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib0component9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib0component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
