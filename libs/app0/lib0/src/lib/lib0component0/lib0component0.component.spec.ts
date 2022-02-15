import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component0Component } from './lib0component0.component';

describe('Lib0component0Component', () => {
  let component: Lib0component0Component;
  let fixture: ComponentFixture<Lib0component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
