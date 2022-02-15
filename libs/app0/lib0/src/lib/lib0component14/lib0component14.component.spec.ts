import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component14Component } from './lib0component14.component';

describe('Lib0component14Component', () => {
  let component: Lib0component14Component;
  let fixture: ComponentFixture<Lib0component14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
