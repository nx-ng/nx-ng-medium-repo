import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component89Component } from './lib0component89.component';

describe('Lib0component89Component', () => {
  let component: Lib0component89Component;
  let fixture: ComponentFixture<Lib0component89Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component89Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
