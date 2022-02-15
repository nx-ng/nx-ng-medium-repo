import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component71Component } from './lib0component71.component';

describe('Lib0component71Component', () => {
  let component: Lib0component71Component;
  let fixture: ComponentFixture<Lib0component71Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component71Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
