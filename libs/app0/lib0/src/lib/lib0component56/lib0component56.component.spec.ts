import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component56Component } from './lib0component56.component';

describe('Lib0component56Component', () => {
  let component: Lib0component56Component;
  let fixture: ComponentFixture<Lib0component56Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component56Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
