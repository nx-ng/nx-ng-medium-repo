import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0component88Component } from './lib0-lib0component88.component';

describe('Lib0Lib0component88Component', () => {
  let component: Lib0Lib0component88Component;
  let fixture: ComponentFixture<Lib0Lib0component88Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0component88Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0component88Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
