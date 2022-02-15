import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib0component12Component } from './lib0-lib0-lib0component12.component';

describe('Lib0Lib0Lib0component12Component', () => {
  let component: Lib0Lib0Lib0component12Component;
  let fixture: ComponentFixture<Lib0Lib0Lib0component12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib0component12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib0component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
