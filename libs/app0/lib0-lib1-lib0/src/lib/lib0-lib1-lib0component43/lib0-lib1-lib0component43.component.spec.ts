import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib0component43Component } from './lib0-lib1-lib0component43.component';

describe('Lib0Lib1Lib0component43Component', () => {
  let component: Lib0Lib1Lib0component43Component;
  let fixture: ComponentFixture<Lib0Lib1Lib0component43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib0component43Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib0component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
