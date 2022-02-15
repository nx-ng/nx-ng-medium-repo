import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0component96Component } from './lib0-lib0component96.component';

describe('Lib0Lib0component96Component', () => {
  let component: Lib0Lib0component96Component;
  let fixture: ComponentFixture<Lib0Lib0component96Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0component96Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0component96Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
