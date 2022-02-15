import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib0component50Component } from './lib0-lib1-lib0component50.component';

describe('Lib0Lib1Lib0component50Component', () => {
  let component: Lib0Lib1Lib0component50Component;
  let fixture: ComponentFixture<Lib0Lib1Lib0component50Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib0component50Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib0component50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
