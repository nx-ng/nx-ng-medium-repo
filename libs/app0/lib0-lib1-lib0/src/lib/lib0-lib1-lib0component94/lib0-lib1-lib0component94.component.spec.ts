import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib0component94Component } from './lib0-lib1-lib0component94.component';

describe('Lib0Lib1Lib0component94Component', () => {
  let component: Lib0Lib1Lib0component94Component;
  let fixture: ComponentFixture<Lib0Lib1Lib0component94Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib0component94Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib0component94Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
