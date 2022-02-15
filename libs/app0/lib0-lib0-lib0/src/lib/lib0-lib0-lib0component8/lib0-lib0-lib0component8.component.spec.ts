import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib0component8Component } from './lib0-lib0-lib0component8.component';

describe('Lib0Lib0Lib0component8Component', () => {
  let component: Lib0Lib0Lib0component8Component;
  let fixture: ComponentFixture<Lib0Lib0Lib0component8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib0component8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib0component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
