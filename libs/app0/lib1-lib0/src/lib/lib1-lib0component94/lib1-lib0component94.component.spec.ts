import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0component94Component } from './lib1-lib0component94.component';

describe('Lib1Lib0component94Component', () => {
  let component: Lib1Lib0component94Component;
  let fixture: ComponentFixture<Lib1Lib0component94Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0component94Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0component94Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
