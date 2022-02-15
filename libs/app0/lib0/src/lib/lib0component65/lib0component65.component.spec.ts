import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component65Component } from './lib0component65.component';

describe('Lib0component65Component', () => {
  let component: Lib0component65Component;
  let fixture: ComponentFixture<Lib0component65Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component65Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
