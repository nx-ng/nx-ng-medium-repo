import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component76Component } from './lib0component76.component';

describe('Lib0component76Component', () => {
  let component: Lib0component76Component;
  let fixture: ComponentFixture<Lib0component76Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component76Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component76Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
