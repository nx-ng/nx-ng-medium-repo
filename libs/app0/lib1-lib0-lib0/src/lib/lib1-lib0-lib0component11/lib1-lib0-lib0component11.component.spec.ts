import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib0component11Component } from './lib1-lib0-lib0component11.component';

describe('Lib1Lib0Lib0component11Component', () => {
  let component: Lib1Lib0Lib0component11Component;
  let fixture: ComponentFixture<Lib1Lib0Lib0component11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib0component11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib0component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
