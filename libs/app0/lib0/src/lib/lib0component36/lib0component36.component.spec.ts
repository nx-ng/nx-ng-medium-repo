import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component36Component } from './lib0component36.component';

describe('Lib0component36Component', () => {
  let component: Lib0component36Component;
  let fixture: ComponentFixture<Lib0component36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component36Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
