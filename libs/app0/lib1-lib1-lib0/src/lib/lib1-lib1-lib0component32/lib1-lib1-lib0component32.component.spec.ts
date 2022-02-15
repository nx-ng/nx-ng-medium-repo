import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib0component32Component } from './lib1-lib1-lib0component32.component';

describe('Lib1Lib1Lib0component32Component', () => {
  let component: Lib1Lib1Lib0component32Component;
  let fixture: ComponentFixture<Lib1Lib1Lib0component32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib0component32Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib0component32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
