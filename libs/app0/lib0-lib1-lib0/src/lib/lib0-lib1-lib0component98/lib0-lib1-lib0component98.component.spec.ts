import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib0component98Component } from './lib0-lib1-lib0component98.component';

describe('Lib0Lib1Lib0component98Component', () => {
  let component: Lib0Lib1Lib0component98Component;
  let fixture: ComponentFixture<Lib0Lib1Lib0component98Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib0component98Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib0component98Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
