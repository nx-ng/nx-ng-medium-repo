import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0component70Component } from './lib0-lib0component70.component';

describe('Lib0Lib0component70Component', () => {
  let component: Lib0Lib0component70Component;
  let fixture: ComponentFixture<Lib0Lib0component70Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0component70Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0component70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
