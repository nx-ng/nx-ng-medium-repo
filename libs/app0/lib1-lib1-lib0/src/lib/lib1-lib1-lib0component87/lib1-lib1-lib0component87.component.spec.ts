import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib0component87Component } from './lib1-lib1-lib0component87.component';

describe('Lib1Lib1Lib0component87Component', () => {
  let component: Lib1Lib1Lib0component87Component;
  let fixture: ComponentFixture<Lib1Lib1Lib0component87Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib0component87Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib0component87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
