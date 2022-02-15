import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component62Component } from './lib0component62.component';

describe('Lib0component62Component', () => {
  let component: Lib0component62Component;
  let fixture: ComponentFixture<Lib0component62Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component62Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
