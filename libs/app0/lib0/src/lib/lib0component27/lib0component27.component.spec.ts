import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component27Component } from './lib0component27.component';

describe('Lib0component27Component', () => {
  let component: Lib0component27Component;
  let fixture: ComponentFixture<Lib0component27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component27Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
