import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component94Component } from './lib0component94.component';

describe('Lib0component94Component', () => {
  let component: Lib0component94Component;
  let fixture: ComponentFixture<Lib0component94Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component94Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component94Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
