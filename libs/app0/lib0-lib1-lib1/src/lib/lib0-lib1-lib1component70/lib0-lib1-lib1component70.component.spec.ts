import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib1component70Component } from './lib0-lib1-lib1component70.component';

describe('Lib0Lib1Lib1component70Component', () => {
  let component: Lib0Lib1Lib1component70Component;
  let fixture: ComponentFixture<Lib0Lib1Lib1component70Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib1component70Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib1component70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
