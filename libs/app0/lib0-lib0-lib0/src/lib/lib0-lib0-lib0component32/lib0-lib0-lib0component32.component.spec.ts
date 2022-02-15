import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib0component32Component } from './lib0-lib0-lib0component32.component';

describe('Lib0Lib0Lib0component32Component', () => {
  let component: Lib0Lib0Lib0component32Component;
  let fixture: ComponentFixture<Lib0Lib0Lib0component32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib0component32Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib0component32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
