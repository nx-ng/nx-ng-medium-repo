import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component86Component } from './lib0component86.component';

describe('Lib0component86Component', () => {
  let component: Lib0component86Component;
  let fixture: ComponentFixture<Lib0component86Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component86Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
