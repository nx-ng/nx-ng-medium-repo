import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib0component87Component } from './lib0-lib1-lib0component87.component';

describe('Lib0Lib1Lib0component87Component', () => {
  let component: Lib0Lib1Lib0component87Component;
  let fixture: ComponentFixture<Lib0Lib1Lib0component87Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib0component87Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib0component87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
