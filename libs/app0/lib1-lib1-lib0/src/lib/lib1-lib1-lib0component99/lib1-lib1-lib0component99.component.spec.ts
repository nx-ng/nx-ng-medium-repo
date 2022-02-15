import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib0component99Component } from './lib1-lib1-lib0component99.component';

describe('Lib1Lib1Lib0component99Component', () => {
  let component: Lib1Lib1Lib0component99Component;
  let fixture: ComponentFixture<Lib1Lib1Lib0component99Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib0component99Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib0component99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
