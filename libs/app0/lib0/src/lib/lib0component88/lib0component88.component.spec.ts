import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component88Component } from './lib0component88.component';

describe('Lib0component88Component', () => {
  let component: Lib0component88Component;
  let fixture: ComponentFixture<Lib0component88Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component88Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component88Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
