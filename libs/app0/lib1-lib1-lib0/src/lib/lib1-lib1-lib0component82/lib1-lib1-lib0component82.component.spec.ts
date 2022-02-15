import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib0component82Component } from './lib1-lib1-lib0component82.component';

describe('Lib1Lib1Lib0component82Component', () => {
  let component: Lib1Lib1Lib0component82Component;
  let fixture: ComponentFixture<Lib1Lib1Lib0component82Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib0component82Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib0component82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
