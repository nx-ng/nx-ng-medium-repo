import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib0component31Component } from './lib0-lib1-lib0component31.component';

describe('Lib0Lib1Lib0component31Component', () => {
  let component: Lib0Lib1Lib0component31Component;
  let fixture: ComponentFixture<Lib0Lib1Lib0component31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib0component31Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib0component31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
