import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component12Component } from './lib0component12.component';

describe('Lib0component12Component', () => {
  let component: Lib0component12Component;
  let fixture: ComponentFixture<Lib0component12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
