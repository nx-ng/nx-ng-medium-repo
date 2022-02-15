import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib0component81Component } from './lib1-lib0-lib0component81.component';

describe('Lib1Lib0Lib0component81Component', () => {
  let component: Lib1Lib0Lib0component81Component;
  let fixture: ComponentFixture<Lib1Lib0Lib0component81Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib0component81Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib0component81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
