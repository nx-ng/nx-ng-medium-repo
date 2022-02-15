import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib0component51Component } from './lib1-lib0-lib0component51.component';

describe('Lib1Lib0Lib0component51Component', () => {
  let component: Lib1Lib0Lib0component51Component;
  let fixture: ComponentFixture<Lib1Lib0Lib0component51Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib0component51Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib0component51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
