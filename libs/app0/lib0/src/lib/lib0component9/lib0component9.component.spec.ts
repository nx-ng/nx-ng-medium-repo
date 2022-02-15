import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component9Component } from './lib0component9.component';

describe('Lib0component9Component', () => {
  let component: Lib0component9Component;
  let fixture: ComponentFixture<Lib0component9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
