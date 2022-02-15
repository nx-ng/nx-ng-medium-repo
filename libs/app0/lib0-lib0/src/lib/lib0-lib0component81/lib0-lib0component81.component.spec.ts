import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0component81Component } from './lib0-lib0component81.component';

describe('Lib0Lib0component81Component', () => {
  let component: Lib0Lib0component81Component;
  let fixture: ComponentFixture<Lib0Lib0component81Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0component81Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0component81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
