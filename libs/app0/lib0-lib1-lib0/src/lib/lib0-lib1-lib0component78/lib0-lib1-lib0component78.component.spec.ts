import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib0component78Component } from './lib0-lib1-lib0component78.component';

describe('Lib0Lib1Lib0component78Component', () => {
  let component: Lib0Lib1Lib0component78Component;
  let fixture: ComponentFixture<Lib0Lib1Lib0component78Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib0component78Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib0component78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
