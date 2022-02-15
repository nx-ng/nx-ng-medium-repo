import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component78Component } from './lib0component78.component';

describe('Lib0component78Component', () => {
  let component: Lib0component78Component;
  let fixture: ComponentFixture<Lib0component78Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component78Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
