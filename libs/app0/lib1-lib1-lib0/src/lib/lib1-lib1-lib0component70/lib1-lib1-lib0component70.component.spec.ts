import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib0component70Component } from './lib1-lib1-lib0component70.component';

describe('Lib1Lib1Lib0component70Component', () => {
  let component: Lib1Lib1Lib0component70Component;
  let fixture: ComponentFixture<Lib1Lib1Lib0component70Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib0component70Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib0component70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
