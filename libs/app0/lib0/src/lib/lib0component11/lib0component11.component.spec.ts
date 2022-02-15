import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component11Component } from './lib0component11.component';

describe('Lib0component11Component', () => {
  let component: Lib0component11Component;
  let fixture: ComponentFixture<Lib0component11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
