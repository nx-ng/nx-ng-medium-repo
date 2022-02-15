import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component45Component } from './lib0component45.component';

describe('Lib0component45Component', () => {
  let component: Lib0component45Component;
  let fixture: ComponentFixture<Lib0component45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component45Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
