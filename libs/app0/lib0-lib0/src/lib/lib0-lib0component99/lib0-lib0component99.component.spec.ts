import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0component99Component } from './lib0-lib0component99.component';

describe('Lib0Lib0component99Component', () => {
  let component: Lib0Lib0component99Component;
  let fixture: ComponentFixture<Lib0Lib0component99Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0component99Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0component99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
