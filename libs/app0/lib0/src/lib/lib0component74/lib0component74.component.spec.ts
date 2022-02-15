import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component74Component } from './lib0component74.component';

describe('Lib0component74Component', () => {
  let component: Lib0component74Component;
  let fixture: ComponentFixture<Lib0component74Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component74Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component74Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
