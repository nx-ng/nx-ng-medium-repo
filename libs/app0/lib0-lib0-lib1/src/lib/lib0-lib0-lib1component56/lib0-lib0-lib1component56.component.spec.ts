import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib1component56Component } from './lib0-lib0-lib1component56.component';

describe('Lib0Lib0Lib1component56Component', () => {
  let component: Lib0Lib0Lib1component56Component;
  let fixture: ComponentFixture<Lib0Lib0Lib1component56Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib1component56Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib1component56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
