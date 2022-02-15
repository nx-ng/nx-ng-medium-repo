import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib0component2Component } from './lib1-lib0-lib0component2.component';

describe('Lib1Lib0Lib0component2Component', () => {
  let component: Lib1Lib0Lib0component2Component;
  let fixture: ComponentFixture<Lib1Lib0Lib0component2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib0component2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib0component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
