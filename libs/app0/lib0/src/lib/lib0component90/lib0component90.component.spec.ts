import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component90Component } from './lib0component90.component';

describe('Lib0component90Component', () => {
  let component: Lib0component90Component;
  let fixture: ComponentFixture<Lib0component90Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component90Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
