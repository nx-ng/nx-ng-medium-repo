import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component53Component } from './lib0component53.component';

describe('Lib0component53Component', () => {
  let component: Lib0component53Component;
  let fixture: ComponentFixture<Lib0component53Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component53Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
